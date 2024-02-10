import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../Utilis/MovieSlice"




const useNowPlayingMovies = () => {
    
    
    const dispatch = useDispatch()
    
    const getMovies = async() => {
        const fetchData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTION)
        const data = await fetchData.json()
       

        dispatch(addNowPlayingMovies(data.results))

    }

    useEffect(()=>{
        getMovies()
    },[])
}


export default useNowPlayingMovies