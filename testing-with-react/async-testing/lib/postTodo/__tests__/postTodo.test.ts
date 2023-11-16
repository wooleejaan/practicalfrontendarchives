import postTodo from "../postTodo";
import { server } from "@/mocks/server";
import { rest } from "msw";

describe("postTodo lib function", () => {
  it("should return the posted todo item", async () => {
    const postedTodo = await postTodo("write tests");
    // post 요청이 성공적인지 테스트합니다.
    expect(postedTodo).toEqual({
      userId: 1,
      title: "write tests",
      completed: false,
      id: 5,
    });
  });

  // post 요청 실패를 테스트합니다.
  it("should fail with an error", async () => {
    server.use(
      rest.post("/todos", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    // 몇 개의 함수가 호출되었는지 숫자로 나타냅니다.
    // 비동기 함수를 처리할 때 유용한데 1이라는 숫자는 하나의 비동기 함수가 실행됬다는 것을 의미합니다.
    expect.assertions(1);
    try {
      await postTodo("write tests");
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toEqual("Failed to post new todo"); // 에러 메시지가 일치하는지 테스트합니다.
      }
    }
  });
});
