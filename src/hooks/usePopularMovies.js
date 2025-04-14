import { useDispatch, useSelector } from "react-redux"
import { API_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const PopularMovies = useSelector(store => store.movies.PopularMovies);

    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options);
        const json = await data.json(); // Converts the raw response to JSON using data.json()
        dispatch(addPopularMovies(json.results)); //Extracts results (an array of movie objects).
    }

    useEffect(() => {
        !PopularMovies && getPopularMovies();
    }, []);
}

export default usePopularMovies;