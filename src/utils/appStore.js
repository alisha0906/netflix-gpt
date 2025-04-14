// appStore.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import the default exported reducer
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
// Create the store using the reducer
const store = configureStore({
  reducer: {
    user: userReducer, // Add the user slice to the store
    movies: moviesReducer,
    gpt: gptReducer
  },
});

export default store;
