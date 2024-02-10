import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import Header from "./Header"
import useNowPlayingMovies from "../CustomHook/useNowPlayingMovies"



const Browse = () => {

  useNowPlayingMovies()

    return (
        <div>
            <Header/>
        </div>
    )
}


export default Browse