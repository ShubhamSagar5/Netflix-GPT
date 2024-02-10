import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import Header from "./Header"
import useNowPlayingMovies from "../CustomHook/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {

  useNowPlayingMovies()

    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}


export default Browse