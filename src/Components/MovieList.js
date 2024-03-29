import MovieCard from "./MovieCard";

const MovieList = ({ title, movieData }) => {

  return (
    <div className=" px-2 md:px-3  mt-5 ">
      <h2 className="text-white text-2xl ">
        {title}
      </h2><div className="flex overflow-x-scroll no-scrollbar">
      <div className="flex ">
      {
        movieData?.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} movieTitle={movie.title} movieOverView={movie.overview} movieReleaseDate={movie.release_date}/>)
      }
        
      </div></div>
    </div>
  );
};

export default MovieList;
