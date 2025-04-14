import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
const useUpcomingMovies = () => {

    //Fetch data from TMDB API and update store
    const dispatch = useDispatch();

    const UpcomingMovies = useSelector(store =>store.movies.UpcomingMovies);
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options);
        const json = await data.json();
        // console.log("Now Playing", json);
        dispatch(addUpcomingMovies(json.results));
    };

    //I will call the above function inside useEffect, so that I call it only once, whenever the component renders.
    useEffect(() => {
        !UpcomingMovies && getUpcomingMovies(); //this conditional execution is used to check for existing data before fetching, which is used to achieve optimisation in our app.
        
    }, []); 
};

export default useUpcomingMovies;