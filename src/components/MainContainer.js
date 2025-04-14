import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return <div>Loading movies ...</div>;

    const first_movie = movies[0];
    const { original_title, overview, id } = first_movie;
    return (
        <div className="relative">
            <div className="pt-[30%] bg-black md:pt-0">
                <VideoTitle title={original_title} overview={overview} />
                <VideoBackground movieId={id} />
            </div>
            {/* <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div> */}

        </div>
    )
};
export default MainContainer;