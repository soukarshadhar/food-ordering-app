import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Home from "./index";
import restaurantsData from "../../mocks/restaurants.json";
import { BrowserRouter } from "react-router-dom";

// Fake fetch call
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(restaurantsData),
  });
});

// Integration testing
describe("Testing Home Component", () => {
  it("Should list 2 cards when searched for pizza", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("shimmer-container")
    );

    const searchBox = screen.getByRole("textbox");
    const itemsBeforeSearch = screen.getAllByTestId("restaurant-card");
    expect(itemsBeforeSearch.length).toBe(9);

    fireEvent.change(searchBox, { target: { value: "pizza" } });

    const itemsAfterSearch = screen.getAllByTestId("restaurant-card");
    expect(itemsAfterSearch.length).toBe(2);
  });

  it("Should filter restaurant with ratings > 4.0", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("shimmer-container")
    );

    const itemsBeforeSearch = screen.getAllByTestId("restaurant-card");
    expect(itemsBeforeSearch.length).toBe(9);

    const button = screen.getByRole("button", { name: "Rating 4.0+" });
    fireEvent.click(button);

    const itemsAfterSearch = screen.getAllByTestId("restaurant-card");
    expect(itemsAfterSearch.length).toBe(7);
  });
});
