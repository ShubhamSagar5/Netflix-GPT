import { useDispatch } from "react-redux"
import { POSTERIMG_URL } from "../Utilis/Constant"
import { addTrailerId, addTrailerOverView, addTrailerReleaseDate, addtrailerTitle, toggleTrailerView } from "../Utilis/DetailMovieTrailerSlice"

 
const MovieCard = ({posterPath,movieId,movieTitle,movieOverView,movieReleaseDate}) => {
    
    
    
    const dispatch = useDispatch()
    const handleTrailerView = () => {
        dispatch(addTrailerId(movieId))
    dispatch(toggleTrailerView())
        dispatch(addtrailerTitle(movieTitle))
        dispatch(addTrailerOverView(movieOverView))
        dispatch(addTrailerReleaseDate(movieReleaseDate))
}
    
    

    if(!posterPath) return null

    return (
        <div className="w-[117px] md:w-[170px]  m-2  cursor-pointer ">
            <img className=" rounded-lg" src={POSTERIMG_URL+posterPath} alt="PosterImg" onClick={handleTrailerView}/>
        </div>
    )
}

export default MovieCard