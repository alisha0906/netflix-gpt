import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath}) => {
    if(!posterPath) {
        return null;
    }
    return (
        <div className="w-36 md:w-48 lg:w-56 pr-4 transition-transform duration-300 hover:scale-105">
            <img 
                className="w-full rounded-lg shadow-lg" 
                alt="Movie Card" 
                src={IMG_CDN_URL + posterPath} 
                style={{minHeight: '100px', minWidth: '100px' , objectFit: 'cover'}}
                />
            
        </div>
    );
};

export default MovieCard;