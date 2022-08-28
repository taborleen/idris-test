import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: null,
  result: null
};

export const fetchCard = createAsyncThunk(
  "card/fetchCard",
  async (currentPage, thunkAPI) => {
    try {
      const res = await fetch(`/orders?count=${currentPage}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.card = action.payload
      state.result = action.payload.items
    });
  },
});

export default cardSlice.reducer;
