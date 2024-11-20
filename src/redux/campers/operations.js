import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data;
    } catch (e) {
      toast.error("An error occurred while fetching campers.");
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getCampersByParams = createAsyncThunk(
  "campers/getCampersByParams",
  async (filters, thunkAPI) => {
    try {
      const { location, venicleType, equipment } = filters;

      const locationFormatted = location ? location.split(", ")[0] : null;

      const venicleTypeFormatted = venicleType
        ? filters.venicleType.split(" ").join("")
        : null;

      const params = {
        location: locationFormatted,
        form: venicleTypeFormatted,
      };

      equipment.forEach((item) => {
        if (item === "Automatic") {
          params.transmission = item;
        } else if (item === "AC") {
          params.AC = true;
        } else if (item === "TV") {
          params.TV = true;
        } else {
          params[item.toLowerCase()] = true;
        }
      });

      const response = await axios.get("/campers", { params });

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 404) {
        toast.error("No campers found matching your criteria");
      } else {
        toast.error("An error occurred while fetching campers.");
      }

      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getCamperDetail = createAsyncThunk(
  "campers/getCamperDetail",
  async (camper, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camper.id}`);
      return response.data;
    } catch (e) {
      toast.error("An error occurred while fetching camper detail.");
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
