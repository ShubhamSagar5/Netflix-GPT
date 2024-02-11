import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    
    const Movies = useSelector((store)=> store.Movie)


    
    return  (
        Movies.nowPlayingMovies && (

            <div className="bg-black">
                     <div className="relative -mt-[190px]">
        
            <MovieList title="Now Playing Movies" movieData = {Movies.nowPlayingMovies}/>
            <MovieList title="Top Rated Movies" movieData = {Movies.topRatedMovies}/>
            <MovieList title="Upcoming Movies" movieData = {Movies.upcomingMovies}/>
            <MovieList title="Popular Movies" movieData = {Movies.popularMovies}/>

        </div> 
            </div>
         
        )
     
    )
}

export default SecondaryContainer