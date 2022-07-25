import { rest } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    console.log("greetings!");
    return res(ctx.json({ greeting: "hello there" }));
  })
);
