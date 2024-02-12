import { BG_POSTER_URL } from "../Utilis/Constant"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"


const GPTSearch = () => {
    return(
        <div>
        <div className=" fixed -z-10">
        <img
          src={BG_POSTER_URL}
          alt="Background Poster"
        />
      </div>
            <GPTSearchBar/>
            <GPTMovieSuggestion/>
        </div>
    )
}

export default GPTSearch