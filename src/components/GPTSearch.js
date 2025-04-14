import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
        <div className="relative w-full h-screen">
            <img className="absolute w-full h-full object-cover" src={BG_URL} alt="logo" />
            <div className="relative z-10">
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>
        </div>
    );
};
export default GPTSearch;
