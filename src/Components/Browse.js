import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import Header from "./Header"
import useNowPlayingMovies from "../CustomHook/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopuarMovies from "../CustomHook/usePopularMovies"
import useTopRatedMovies from "../CustomHook/useTopRatedMovis"
import useUpcomingMovies from "../CustomHook/useUpcomingMovies"
import { useSelector } from "react-redux"
import GPTSearch from "./GPTSearch"



const Browse = () => {

    const GPTView = useSelector((store)=>store.GPT.gptView)

  useNowPlayingMovies()
  usePopuarMovies()
  useTopRatedMovies()
  useUpcomingMovies()

    return (
        <div className="">

            <Header/>

    {
        GPTView ? <GPTSearch/> : <><MainContainer/>
            <SecondaryContainer/></>
    }
            
        </div>
    )
}


export default Browse