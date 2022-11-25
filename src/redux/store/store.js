import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from '../reducers/userReducer';
import { restaurantsReducer } from "../reducers/restaurantsReducer";
import { menusReducer } from "../reducers/menusReducer";
import { platosReducer } from "../reducers/platosReducer";
import { cartReducer } from "../reducers/cartReducer";
import { orderReducer } from "../reducers/orderReducer";
const reducer = {
  userStore: userReducer,
  restaurantsStore: restaurantsReducer,
  menusStore: menusReducer,
  platosStore: platosReducer,
  cartStore: cartReducer,
  orderStore: orderReducer,
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
