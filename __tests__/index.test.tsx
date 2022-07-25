import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { Wrapper } from "../jest/Wrapper";
import { server } from "../mocks/jest";
import { rest } from "msw";

describe("Home", () => {
  it("successful api call", async () => {
    server.use(
      rest.get("/foo", (req, res, ctx) => {
        return res(ctx.json({ foo: "bar" }));
      })
    );

    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    const heading = await screen.findByRole("heading", {
      name: /Welcome to the test app!/i,
    });
    expect(heading).toBeInTheDocument();

    const status = await screen.findByText("success");
    expect(status).toBeInTheDocument();
  });
  it("error api call", async () => {
    server.use(
      rest.get("/foo", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    const heading = await screen.findByRole("heading", {
      name: /Welcome to the test app!/i,
    });
    expect(heading).toBeInTheDocument();

    const status = await screen.findByText("error");
    expect(status).toBeInTheDocument();
  });
});
