import { useDispatch } from "react-redux"
import { POSTERIMG_URL } from "../Utilis/Constant"
import { addTrailerId, toggleTrailerView } from "../Utilis/DetailMovieTrailerSlice"

 
const MovieCard = ({posterPath,movieId}) => {
    
    
    
    const dispatch = useDispatch()
    const handleTrailerView = () => {
        dispatch(addTrailerId(movieId))
    dispatch(toggleTrailerView())
    }
    
    

    if(!posterPath) return null

    return (
        <div className="w-[117px] md:w-[170px]  m-2  cursor-pointer ">
            <img className=" rounded-lg" src={POSTERIMG_URL+posterPath} alt="PosterImg" onClick={handleTrailerView}/>
        </div>
    )
}

export default MovieCard