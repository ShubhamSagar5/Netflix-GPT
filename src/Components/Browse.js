import { useEffect } from "react";
import { API_OPTION } from "../Utilis/Constant";
import Header from "./Header";
import useNowPlayingMovies from "../CustomHook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopuarMovies from "../CustomHook/usePopularMovies";
import useTopRatedMovies from "../CustomHook/useTopRatedMovis";
import useUpcomingMovies from "../CustomHook/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
import DetailMovie from "./DetailMovie";

const Browse = () => {
  const GPTView = useSelector((store) => store.GPT.gptView);

  const TrailerView = useSelector((store) => store.DetailTrailer?.trailerView);

  useNowPlayingMovies();
  usePopuarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="">
      <Header />
      {!TrailerView ? (
        <>
          {GPTView ? (
            <GPTSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      ) : (
        <DetailMovie />
      )}
    </div>
  );
};

export default Browse;
