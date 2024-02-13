import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    
    const Movie = useSelector((store)=> store.Movie?.nowPlayingMovies)
    
    if(!Movie) return

    const {title,overview,id} = Movie[2]
    return(
        <div className="pt-[50%] bg-black  md:pt-0">
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer