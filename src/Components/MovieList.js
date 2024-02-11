import MovieCard from "./MovieCard";

const MovieList = ({ title, movieData }) => {
  console.log(movieData);
  console.log(title)
  return (
    <div className="px-3 ">
      <h2 className="text-white text-2xl font-bold">
        {title}
      </h2><div className="flex overflow-x-scroll no-scrollbar">
      <div className="flex ">
      {
        movieData?.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)
      }
        
      </div></div>
    </div>
  );
};

export default MovieList;
