import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WindowDimensionState } from '../../Interface/Interface';

const initialState: WindowDimensionState = {
  status: "desktop", // domyślny stan
};

const windowDimensionSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setWindowDimension(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const { setWindowDimension } = windowDimensionSlice.actions;
export const windowDimensionReducer = windowDimensionSlice.reducer;