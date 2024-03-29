import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../Utilis/Constant"
import { addUpcomingMovies } from "../Utilis/MovieSlice"
import { useEffect } from "react"


const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const upcomingMovies = useSelector((store)=>store.Movie.upcomingMovies)

    const getUpcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTION)
        const json = await data.json()


        dispatch(addUpcomingMovies(json.results))


    }

    useEffect(()=>{
       if(!upcomingMovies){
        getUpcomingMovies()
       } 
    },[])
}


export default useUpcomingMovies