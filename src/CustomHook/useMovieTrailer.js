import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import { useDispatch } from "react-redux"
import { addMovieTrailerVideo } from "../Utilis/MovieSlice"



const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()


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
}

export default useMovieTrailer