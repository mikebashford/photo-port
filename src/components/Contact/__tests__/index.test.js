import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Contact text", () => {
  it("contains the contact me", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("Contact")).toHaveTextContent("Contact me");
  });
});

describe("Submit button", () => {
  it("show the submit button text", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
