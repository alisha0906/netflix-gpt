import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    console.log(movies);
    return (
            <div className="px-4 py-2 bg-black">
                <h1 className="text-lg md:text-2xl py-6 text-white">{title}</h1>
                <div className="flex overflow-x-scroll no-scrollbar">
                    {movies?.map((movie) => (
                        <MovieCard key={movies.id} posterPath={movie.poster_path} />
                    ))}
                    
                </div>

            </div>

    )
}

export default MovieList;
