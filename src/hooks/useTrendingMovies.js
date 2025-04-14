import { useDispatch, useSelector } from "react-redux"
import { API_Options } from "../utils/constants";
import { addTrendingMovies} from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {

    const dispatch = useDispatch();
    const TrendingMovies = useSelector(store => store.movies.TrendingMovies);

    const getTrendingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Options);
        const json = await data.json(); // Converts the raw response to JSON using data.json()
        dispatch(addTrendingMovies(json.results)); //Extracts results (an array of movie objects).
    }

    useEffect(() => {
        !TrendingMovies && getTrendingMovies();
    }, []);
}

export default useTrendingMovies;