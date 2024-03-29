import FavoriteButtonPresenter from "../../src/scripts/utils/favorite-button-presenter";
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.getElementById("favoriteButtonContainer"),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
