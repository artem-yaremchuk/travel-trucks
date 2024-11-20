import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCampers,
  getCampersByParams,
  getCamperDetail,
} from "./operations";

const campersInitialState = {
  items: [],
  visibleItems: [],
  total: 0,
  itemDetails: null,
  isLoading: false,
  error: null,
  favorites: [],
  limit: 4,
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
    loadMoreCampers: (state) => {
      const currentLength = state.visibleItems.length;
      const nextItems = state.items.slice(
        currentLength,
        currentLength + state.limit
      );

      state.visibleItems = [...state.visibleItems, ...nextItems];
    },
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
    resetCampers: (state) => {
      state.items = [];
      state.visibleItems = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.total = action.payload.total;

        state.visibleItems = state.items.slice(0, state.limit);
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(getCampersByParams.pending, handlePending)
      .addCase(getCampersByParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.total = action.payload.items.length;

        state.visibleItems = state.items.slice(0, state.limit);
      })
      .addCase(getCampersByParams.rejected, handleRejected)
      .addCase(getCamperDetail.pending, handlePending)
      .addCase(getCamperDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemDetails = action.payload;
      })
      .addCase(getCamperDetail.rejected, handleRejected);
  },
});

export const { loadMoreCampers, toggleFavorite, resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
