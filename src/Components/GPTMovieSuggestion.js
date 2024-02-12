import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const GPTMovieSuggestion = () => {
    
    const {moviesName,moviesCollection} =  useSelector((store)=>store.GPT)
    
    console.log(moviesName)
    console.log(moviesCollection)
    return (
        <div className="p-2 m-4 bg-black opacity-85">
           {
            moviesName?.map((movie,index)=> (<MovieList key={movie} title={movie} movieData={moviesCollection[index]}/>))
           }
        </div>
    )
}

//title, movieData <MovieList key={movies} title={movies} movieData={moviesCollection
export default GPTMovieSuggestion