import { render } from "@testing-library/react";
import Home from "@/pages/index";
import { Wrapper } from "../jest/Wrapper";

it("renders homepage unchanged", () => {
  const { container } = render(
    <Wrapper>
      <Home />
    </Wrapper>
  );
  expect(container).toMatchSnapshot();
});
