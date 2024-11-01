import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperDetail } from "./operations";

const campersInitialState = {
  items: [],
  itemDetails: null,
  isLoading: false,
  error: null,
  favorites: [],
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: campersInitialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camper = action.payload;
      const existingIndex = state.favorites.findIndex(
        (item) => item.id === camper.id,
      );
      if (existingIndex !== -1) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== camper.id,
        );
      } else {
        state.favorites.push(camper);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(getCamperDetail.pending, handlePending)
      .addCase(getCamperDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemDetails = action.payload;
      })
      .addCase(getCamperDetail.rejected, handleRejected);
  },
});

export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
