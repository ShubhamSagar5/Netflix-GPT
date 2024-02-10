import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import { useDispatch, useSelector } from "react-redux"
import { addMovieTrailerVideo } from "../Utilis/MovieSlice"


const VideoBackground = ({movieId}) => {
    
    const dispatch = useDispatch()
    const TrailerKey = useSelector((store)=> store.Movie?.trailerVideo)
    
    const getMoviesVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION)
        const json = await data.json()
    


        const filterVideo = json.results.filter((video)=> video.type === "Trailer")

        const TrailerVideo = filterVideo.length ? filterVideo[0] : json.results[1]

     

        dispatch(addMovieTrailerVideo(TrailerVideo))

    }

    useEffect(()=>{
        getMoviesVideo()
    },[])


    
    return (
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+TrailerKey?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}

export default VideoBackground