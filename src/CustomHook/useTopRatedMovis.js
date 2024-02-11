import { useDispatch } from "react-redux"
import { API_OPTION } from "../Utilis/Constant"
import { addTopRatedMovies } from "../Utilis/MovieSlice"
import { useEffect } from "react"



const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    const getTopRatedMoies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTION)
        const json = await data.json()

        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        getTopRatedMoies()
    },[])
}

export default useTopRatedMovies