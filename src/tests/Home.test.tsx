import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "src/pages/home";

vi.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    ...options,
  });

describe("Home page", () => {
  it("drawer navigation", async () => {
    await customRender(<Home />);

    await waitFor(async () => {
      const workload = await screen.getByTestId("fc5b6163a805d9e1");

      await fireEvent.click(workload);

      const currentIndex = await screen.getByTestId(
        "drawer-navigation-current-index"
      );
      expect(currentIndex.textContent).toEqual("1");
    });

    screen.debug();
  });
});
