import { rest } from "msw";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          title: "Wave hello! 👋",
          completed: false,
          id: 1,
        },
        {
          userId: 1,
          title: "Get Coffee ☕☕☕",
          completed: false,
          id: 2,
        },
        {
          userId: 1,
          title: "Go to Work ⚒",
          completed: false,
          id: 3,
        },
        {
          userId: 1,
          title: "Write Code 💻",
          completed: false,
          id: 4,
        },
      ])
    );
  }),
];
