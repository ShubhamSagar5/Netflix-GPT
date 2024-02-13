import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"



const DetailMovie = () => {
    
    const TrailerId = useSelector((store)=> store.DetailTrailer?.trailerId)
    console.log(TrailerId)
    return (
        <div>
            
            <VideoBackground movieId={TrailerId} screenHeight='true'/>
        </div>
    )
}

export default DetailMovie