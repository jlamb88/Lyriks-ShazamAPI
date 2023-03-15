import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamAPI } from './services/shazamCore'

export const store = configureStore({
  reducer: {
    [shazamAPI.reducerPath]: shazamAPI.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(shazamAPI.middleware)
});
