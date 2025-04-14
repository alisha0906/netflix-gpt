import { useRef } from "react";
import {API_Options} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import client
 from "../utils/opneai";
const GPTSearchBar = () => {

    const dispatch = useDispatch();
    const searchText = useRef(null);

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "include_adult=false&language=en-US&page=1", API_Options);
        const json = await data.json();
        return json.results;
    }
    const handleGPTSearch = async() => {
        
        //Make an API call to GPT API and get Movie Results

        const getQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 10 movies";
        const response = await client.responses.create({
            model: 'gpt-3.5-turbo',
            instructions: 'You are a coding assistant that talks like a pirate',
            input: getQuery,
        });

        if(!response.choices) {
            return <div>Movies not available</div>
        }
        const gptMovies = response.choices?.[0]?.message?.content.split(",") //.split will give the array of gptMovies

        //For each movie I will search TMDB API
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB()); // as we have used async-await so the search function will return an array of promises which will take some time to resolve.
        const tmdbResults = await Promise.all(promiseArray); //now the program will wait for this promise array to resolve. 
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }
    return( <div className="p-[10%] flex justify-center">
        <form className="w-1/2 md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder="What should i watch today" />
            <button 
                className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
                onClick={handleGPTSearch}>Search</button>
        </form>
    </div>);
};
export default GPTSearchBar;