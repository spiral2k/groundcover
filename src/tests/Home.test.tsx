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
  describe("Drawer Navigation", () => {
    it("Click Next", async () => {
      await customRender(<Home />);

      await waitFor(async () => {
        const workload = await screen.getByTestId("fc5b6163a805d9e1");

        await fireEvent.click(workload);

        const nextButton = await screen.getByTestId(
          "drawer-navigation-btn-next"
        );
        
        await fireEvent.click(nextButton);

        const currentIndex = await screen.getByTestId(
          "drawer-navigation-current-index"
        );

        expect(currentIndex.textContent).toEqual("2");
      }, {
        timeout: 2000
      });

      screen.debug();
    });

    it("Click Previous", async () => {
      await customRender(<Home />);

      await waitFor(async () => {
        const workload = await screen.getByTestId("fc5b6163a805d9e1");

        await fireEvent.click(workload);

        const prevButton = await screen.getByTestId(
          "drawer-navigation-btn-prev"
        );
        
        await fireEvent.click(prevButton);

        const currentIndex = await screen.getByTestId(
          "drawer-navigation-current-index"
        );

        expect(currentIndex.textContent).toEqual("53");
      }, {
        timeout: 2000
      });

      screen.debug();
    });
  });
});
