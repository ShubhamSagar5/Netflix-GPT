import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"



const DetailMovie = () => {
    
    const TrailerId = useSelector((store)=> store.DetailTrailer?.trailerId)
    const {trailerTitle,trailerOverView,trailerReleaseDate} = useSelector((store)=>store?.DetailTrailer)
    
    return (
        <div className="bg-black w-screen h-screen pt-[200px] md:pt-0">
            
            <VideoBackground movieId={TrailerId} />

            <div className="pt-10 m-4 md:w-4/12 w-full text-white">
                <div className=" text-3xl font-semibold"> <span className=" font-sans underline"> {trailerTitle}</span></div>
                <div className=" md:text-xl text-xl  pt-3 mr-2">{trailerOverView}</div>
                <div className=" text-2xl  pt-3">ReleaseDate : {trailerReleaseDate} </div>
            </div>
        
        </div>
    )
}

export default DetailMovie