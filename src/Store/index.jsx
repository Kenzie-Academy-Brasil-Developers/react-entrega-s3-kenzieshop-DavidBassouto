import { combineReducers, legacy_createStore as createStore } from "redux";
import { CartReducer } from "./modules/cart/reducer";
import { ProductsReducer } from "./modules/products/reducer";

const reducers = combineReducers(
  { products: ProductsReducer },
  { cart: CartReducer }
);

export const store = createStore(reducers);
