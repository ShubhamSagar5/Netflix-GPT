import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import Header from "./Header"
import useNowPlayingMovies from "../CustomHook/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopuarMovies from "../CustomHook/usePopularMovies"
import useTopRatedMovies from "../CustomHook/useTopRatedMovis"
import useUpcomingMovies from "../CustomHook/useUpcomingMovies"



const Browse = () => {

  useNowPlayingMovies()
  usePopuarMovies()
  useTopRatedMovies()
  useUpcomingMovies()

    return (
        <div >
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}


export default Browse