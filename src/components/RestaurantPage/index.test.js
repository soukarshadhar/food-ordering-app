import {
  waitForElementToBeRemoved,
  fireEvent,
  render,
  screen,
  act,
} from "@testing-library/react";
import restaurantData from "../../mocks/restaurantById.json";
import RestaurantPage from "./index";
import Header from "../Header";
import Cart from "../Cart";
import store from "../../store/appStore";
import { Provider } from "react-redux";
import { clearCart } from "../../store/cart";
import { BrowserRouter } from "react-router-dom";

// Fake fetch call
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(restaurantData),
  });
});

// Integration test
describe("Restaurant Page Component", () => {
  afterEach(() => {
    act(() => store.dispatch(clearCart()));
  });

  it("Should render 15 accordions", async () => {
    render(
      <Provider store={store}>
        <RestaurantPage />
      </Provider>
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const accordions = screen.getAllByTestId("accordion");
    expect(accordions.length).toBe(15);
  });

  it("Should add items to cart and update cart items at header", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantPage />
        </Provider>
      </BrowserRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const menuDishes = screen.getAllByTestId("add-dish");
    menuDishes.forEach((item) => {
      fireEvent.click(item);
    });
    const cartItems = screen.getByText(`${menuDishes.length}`);
    expect(cartItems).toBeInTheDocument();
  });

  it("Should add items to cart and update carts page", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
          <RestaurantPage />
        </Provider>
      </BrowserRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const menuDishes = screen.getAllByTestId("add-dish");
    menuDishes.forEach((item) => {
      fireEvent.click(item);
    });
    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems.length).toBe(menuDishes.length);
  });
});
