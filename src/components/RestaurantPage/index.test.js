import { act, fireEvent, render, screen } from "@testing-library/react";
import restaurantData from "../../mocks/restaurantById.json";
import RestaurantPage from "./index";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import store from "../../store/appStore";
import { clearCart } from "../../store/cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(restaurantData),
  });
});

// Integration test
describe("Testing Restaurant Page Component", () => {
  afterEach(() => {
    act(() => store.dispatch(clearCart()));
  });

  it("Should render 15 accordions", async () => {
    await act(() =>
      render(
        <Provider store={store}>
          <RestaurantPage />
        </Provider>
      )
    );

    const accordions = screen.getAllByTestId("accordion");
    expect(accordions.length).toBe(15);
  });

  it("Should add items to cart and update cart items at header", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantPage />
          </Provider>
        </BrowserRouter>
      )
    );
    const menuDishes = screen.getAllByTestId("add-dish");
    menuDishes.forEach((item) => {
      fireEvent.click(item);
    });
    const cartItems = screen.getByText(`${menuDishes.length}`);
    expect(cartItems).toBeInTheDocument();
  });

  it("Should add items to cart and update carts page", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Cart />
            <RestaurantPage />
          </Provider>
        </BrowserRouter>
      )
    );

    const menuDishes = screen.getAllByTestId("add-dish");
    menuDishes.forEach((item) => {
      fireEvent.click(item);
    });
    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems.length).toBe(menuDishes.length);
  });
});
