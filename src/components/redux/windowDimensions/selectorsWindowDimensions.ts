import { RootState } from '../store';

export const selectWindowDimensions = (state: RootState) => state.screen.status;