import { POSTERIMG_URL } from "../Utilis/Constant"

 
const MovieCard = ({posterPath}) => {
    return (
        <div className="w-[170px]  m-2  ">
            <img className=" rounded-lg" src={POSTERIMG_URL+posterPath} alt="PosterImg" />
        </div>
    )
}

export default MovieCard