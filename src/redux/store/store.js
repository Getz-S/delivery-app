import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from '../reducers/userReducer';
import { restaurantsReducer } from "../reducers/restaurantsReducer";
const reducer = {
  userStore: userReducer,
  restaurantsStore: restaurantsReducer,
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
