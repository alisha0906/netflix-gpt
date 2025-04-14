import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        movies.nowPlayingMovies && movies.PopularMovies && movies.UpcomingMovies && (
            <div className="bg-black">
                <div className=" -mt-52 pl-12 relative z-20">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies.TrendingMovies} />
                    <MovieList title={"Popular"} movies={movies.PopularMovies} />
                    <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
                    <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                </div>
            </div>
        )  // Remove the semicolon here
    );
};

export default SecondaryContainer;