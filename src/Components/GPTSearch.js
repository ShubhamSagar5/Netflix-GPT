import { BG_POSTER_URL } from "../Utilis/Constant"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"


const GPTSearch = () => {
    return(
        <div>
        <div className="absolute -z-10">
        <img
          src={BG_POSTER_URL}
          alt=""
        />
      </div>
            <GPTSearchBar/>
            <GPTMovieSuggestion/>
        </div>
    )
}

export default GPTSearch