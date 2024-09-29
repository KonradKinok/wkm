import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type LanguageValue = "pl" | "en" | "ua"; // Typ dla języków
export interface LanguageState {
  language: LanguageValue; // Użyj zdefiniowanego typu
}
const initialState: LanguageState = {
  language: 'pl', // Domyślny język
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state: LanguageState, action: PayloadAction<LanguageValue>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer=languageSlice.reducer;