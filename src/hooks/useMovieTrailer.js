import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_Options } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    
    const dispatch = useDispatch();
    const trailerVideos = useSelector(store => store.movies.trailerVideo)
    //you can either use useState hook to display the updated trailer, or you can add this video to the store, and fetch it from there wherever required
    // const [trailerId, setTrailerId] = useState(null);
    //fetch trailor video
    const getVideos = async () => {
        try {
            // In useNowPlayingMovies.js
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                API_Options
              );
            const json = await data.json();

            // console.log(json);
            // Check if 'results' is an array before calling .filter()
            if (Array.isArray(json.results)) {
                const filteredData = json.results.filter((video) => video.type === "Trailer");
    
                // If no trailers are found, fall back to the first result
                const trailer = filteredData.length ? filteredData[0] : json.results[0];

                // console.log("Trailer", trailer);
                // Dispatch the trailer video data to the Redux store
                dispatch(addTrailerVideo(trailer));
            } else {
                console.error("API response does not contain a valid 'results' array:", json);
            }
        } catch (error) {
            !trailerVideos && console.error("Error fetching movie trailers:", error);
        }
    };
    
    useEffect(() => {
        getVideos();
    }, []);
};

export default useMovieTrailer;