import { render, screen } from "@testing-library/react";
import RestaurantCard from "./index";
import restaurantsData from "../../mocks/restaurants.json";
import { BrowserRouter } from "react-router-dom";

describe("Testing Restaurant Card component", () => {
  it("Should render restaurant name = UBQ by Barbeque Nation", () => {
    const restaurants =
      restaurantsData.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    render(
      <BrowserRouter>
        <RestaurantCard restaurant={restaurants[0]} />
      </BrowserRouter>
    );

    const restaurantName = screen.getByText("UBQ by Barbeque Nation");
    expect(restaurantName).toBeInTheDocument();
  });

  it("Should render restaurant delivery time = 45-50 mins", () => {
    const restaurants =
      restaurantsData.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    render(
      <BrowserRouter>
        <RestaurantCard restaurant={restaurants[0]} />
      </BrowserRouter>
    );

    const restaurantDelTime = screen.getByText("45-50 mins");
    expect(restaurantDelTime).toBeInTheDocument();
  });
});
