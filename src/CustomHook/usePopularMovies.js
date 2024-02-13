import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../Utilis/Constant"
import { addPopularMovies } from "../Utilis/MovieSlice"
import { useEffect } from "react"

const usePopuarMovies = () => {

    const dispatch = useDispatch()

    const popularMovies = useSelector((store)=>store.Movie.popularMovies)

    const getPopularMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTION)
    const json = await data.json()

    dispatch(addPopularMovies(json.results))
}


useEffect(()=>{
   !popularMovies && getPopularMovies()
})
}


export default usePopuarMovies
