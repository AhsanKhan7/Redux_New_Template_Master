import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: 0,
  },
  reducers: {
    setBasket: (state, action) => {
      console.log("pre", state.basket);
      console.log("new", action.payload.basket);
      // state.basket = action.payload.basket;
      state.basket += 1;
    },

    removeOneBasket: (state, action) => {
      state.basket -= 1;
    },

    resetBasket: (state, action) => {
      state.basket = 0;
    },
  },
});

export const { setBasket, resetBasket, removeOneBasket } = basketSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectBasket = (state) => state.basket.basket;
// export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
