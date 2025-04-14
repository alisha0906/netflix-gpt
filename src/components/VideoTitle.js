const VideoTitle = ({title, overview}) => {
    return (
    
    <div className=" w-screen aspect-video pt-[10%] px-16 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-3 w-1/4 text-justify">{overview}</p>
        <div>
            <button className="bg-gray-500 text-white py-2 md:py-4 px-6 md:px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer hover: bg-capacity-90" >▶Play</button>
            <button className=" hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer">More Info</button>
        </div>
    </div>
    );
};

export default VideoTitle;