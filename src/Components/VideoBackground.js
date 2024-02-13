import {  useSelector } from "react-redux"
import useMovieTrailer from "../CustomHook/useMovieTrailer"


const VideoBackground = ({movieId,screenHeight}) => {
    
    
    useMovieTrailer(movieId)
    const TrailerKey = useSelector((store)=> store.Movie?.trailerVideo)
    
 


    
    return (
        <div>
            <iframe className={`w-screen h-${screenHeight ? '[700px]' : '[850px]'} aspect-video`} src={"https://www.youtube.com/embed/"+TrailerKey?.key+"?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}

export default VideoBackground


// h-[700px]