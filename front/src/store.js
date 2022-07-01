import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
} from "./reducers/productReducer";
import { newCatReducer } from "./reducers/catReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  cat: newCatReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
