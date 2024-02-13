import { BG_POSTER_URL } from "../Utilis/Constant"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"


const GPTSearch = () => {
    return(
        <div>
        <div className=" fixed -z-10">
        <img className="h-screen w-screen object-cover "
          src={BG_POSTER_URL}
          alt="Background Poster"
        />
      </div>
      <div className="">
        <GPTSearchBar/>
            <GPTMovieSuggestion/>
      </div>
            
        </div>
    )
}

export default GPTSearch