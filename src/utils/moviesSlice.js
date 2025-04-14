import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null, 
        PopularMovies: null,
        trailerVideo: null,
        UpcomingMovies: null,
        TrendingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.TrendingMovies = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTrendingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;