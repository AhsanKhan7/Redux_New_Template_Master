import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import nameReducer from "../features/nameInput/nameSlice";
import userReducer from "../features/user/userSlice";
import basketReducer from "../features/basket/basketSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
    user: userReducer,
    basket: basketReducer,
  },
});
