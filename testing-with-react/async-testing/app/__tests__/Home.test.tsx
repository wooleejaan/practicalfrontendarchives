import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../page";
import { server } from "@/mocks/server";
import { rest } from "msw";

describe("Home", () => {
  it("should add a new todo", async () => {
    render(<Home />); // ARRANGE

    // input 요소를 가져옵니다.
    // ACT
    const input = screen.getByPlaceholderText("New Todo");
    await userEvent.type(input, "My new todo");
    expect(input).toHaveValue("My new todo"); // ASSERT

    // ACT
    const button = screen.getByRole("button", {
      name: "Submit",
    });
    await userEvent.click(button);
    waitFor(() => {
      // 버튼은 클릭 후 값이 초기화되기를 기다립니다. 클릭시 비동기 요청이 수행되므로 기다려야 합니다.
      expect(input).toHaveValue(""); // ASSERT
      // }, { timeout: 2000 });
    });

    // 비동기통신 후 데이터가 바로 보여지지 않으므로 await을 사용해야 합니다.
    const data = await screen.findByText("My new todo");
    expect(data).toHaveTextContent("My new todo");
  });

  // 새로운 할일 추가가 실패되었을 때를 테스트합니다.
  it("should not add a new todo if the request fails", async () => {
    server.use(
      rest.post("/todos", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<Home />); // ARRANGE

    // ACT
    const input = screen.getByPlaceholderText("New Todo");
    await userEvent.type(input, "My new todo");
    expect(input).toHaveValue("My new todo"); // ASSERT

    // ACT
    const button = screen.getByRole("button", {
      name: "Submit",
    });
    await userEvent.click(button);
    waitFor(() => {
      expect(input).toHaveValue(""); // ASSERT
    });

    // 데이터가 있는 시점이므로 new todo가 보여져야 합니다. 데이터가 없다면 에러가 아니라 null이므로 queryByText를 사용합니다.
    const data = await screen.queryByText("My new todo");
    expect(data).not.toBeInTheDocument();
  });

  it("should update a todo", async () => {
    render(<Home />); // ARRANGE

    // 비동기 데이터이므로 처음에 데이터가 없습니다. getAllByRole 대신 findAllByRole을 사용합니다.
    // find는 비동기입니다.
    // ACT
    const checkboxArray = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    const checkbox = checkboxArray[0];
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    waitFor(() => {
      expect(checkbox.checked).toBeTruthy(); // ASSERT
    });
  });

  it("should not update a todo if the request fails", async () => {
    server.use(
      rest.put("/todos/:id", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<Home />); // ARRANGE

    // ACT
    const checkboxArray = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    const checkbox = checkboxArray[0];
    expect(checkbox).not.toBeChecked(); // ASSERT

    await userEvent.click(checkbox); // ACT

    expect(checkbox).not.toBeChecked(); // ASSERT
  });

  it("should delete a todo", async () => {
    render(<Home />); // ARRANGE

    const todoText = await screen.findByText("Write Code 💻");
    expect(todoText).toBeInTheDocument(); // ASSERT

    // ACT
    const buttons = await screen.findAllByTestId("delete-button");
    const button = buttons[0];
    await userEvent.click(button);

    expect(todoText).not.toBeInTheDocument(); // ASSERT
  });

  it("should not delete a todo if the request fails", async () => {
    server.use(
      rest.delete("/todos/:id", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<Home />); // ARRANGE

    // ACT
    const buttons = await screen.findAllByTestId("delete-button");
    const button = buttons[0];
    await userEvent.click(button);

    const todoText = screen.queryByText("Write Code 💻");
    expect(todoText).toBeInTheDocument(); // ASSERT
  });
});
