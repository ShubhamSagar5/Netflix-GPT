import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../Utilis/MovieSlice"




const useNowPlayingMovies = () => {
    
    
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store)=>store.Movie.nowPlayingMovies)

    const getMovies = async() => {
        const fetchData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTION)
        const data = await fetchData.json()
       

        dispatch(addNowPlayingMovies(data.results))

    }

    useEffect(()=>{
       if(!nowPlayingMovies) getMovies()
    },[])
}


export default useNowPlayingMovies