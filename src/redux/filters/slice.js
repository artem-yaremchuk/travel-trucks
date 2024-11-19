import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  location: "",
  equipment: [],
  venicleType: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVenicleType: (state, action) => {
      state.venicleType = action.payload;
    },
    setEquipment: (state, action) => {
      state.equipment = action.payload;
      },
    resetFilters: () => filtersInitialState,
  },
});

export const { setLocation, setVenicleType, setEquipment, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
