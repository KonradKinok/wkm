import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { languageReducer } from "./language/sliceLanguage";
import { windowDimensionReducer } from "./windowDimensions/sliceWindowDimensions";

const rootReducer = combineReducers({
  language: languageReducer,
  screen: windowDimensionReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;