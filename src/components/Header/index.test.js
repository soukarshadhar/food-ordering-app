import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";
import { Provider } from "react-redux";
import store from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  it("Should render a button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render Cart with 0 Items", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const text = screen.getByText("0");
    expect(text).toBeInTheDocument();
  });

  it("Should render Logout Button after clicking Login", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });
});
