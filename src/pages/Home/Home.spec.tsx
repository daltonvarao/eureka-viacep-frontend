// Home.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";

describe("Home Page", () => {
  it("should the component contain img", () => {
    render(<Home />);
    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
  });
});
