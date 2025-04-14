import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {

    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTrendingMovies();
    return (
        <div>
            < Header />
            {showGPTSearch ? (
                <GPTSearch />
            ): (
                <>
                    < MainContainer />
                    < SecondaryContainer />
                </>
            )}
            

        </div>
    );
};
export default Browse;