import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
 
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
    if(!trailerVideo) {
        return (
            <div className="tex-2xl">Loading trailer ..</div>
        )
    }
    // console.log("movieId", movieId);
    // console.log("trailerVideo:", trailerVideo);
    return (
        <div className="aspect-screen w-full h-screen"> 
            <iframe 
                className="w-full top-0 left-0 aspect-screen h-full object-cover"
                width="560" 
                height="315" 
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0"}
                title="YouTube video player" 
                frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
};

export default VideoBackground;