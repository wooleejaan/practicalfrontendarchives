import { server } from "@/mocks/server";
import { rest } from "msw";
import fetchTodos from "../fetchTodos";

// 문자열로 터미널에서 테스트 이름을 식별할 수 있고,
// 콜백함수 내부에서 개별적인 유닛테스트 코드를 작성합니다.
describe("fetchTodos lib function", () => {
  it("should return the correct number of todo items", async () => {
    const todosArray = await fetchTodos();
    expect(todosArray.length).toBe(4); // 배열 개수가 4개이기를 기대합니다.
  });

  it("should return an empty array with an error", async () => {
    server.use(
      // 실패를 테스트하기 위해 overwrite합니다.
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    const todosArray = await fetchTodos();
    expect(todosArray.length).toBe(0); // 실패했으므로 빈 배열을 기대합니다.
  });
});
