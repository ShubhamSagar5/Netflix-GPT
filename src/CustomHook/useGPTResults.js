import { useDispatch } from "react-redux"
import { API_OPTION } from "../Utilis/Constant"
import openai from "../Utilis/OpenAI"
import { addMoviesCollectionAndName } from "../Utilis/GPTSlice"


const useGPTResults = (searchText) => {

    const dispatch = useDispatch() 


    const getMovieSearchTMDB = async(movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTION)
        const json = await data.json()

        return json.results
    }




    const handleSearchResults = async() => {
       
        const Query = "Act as an a movie recommendation system and suggest some movie for the qeury"+searchText.current.value+".only give me name of 5 movie comma seperated like example results: gadar,sholay,Don,koi mil gya"
        
        const chatCompletion = await openai.chat.completions.create({
              messages: [{ role: 'user', content:Query }],
              model: 'gpt-3.5-turbo',
            });
          
        const GPTResults = chatCompletion?.choices[0]?.message?.content.split(",")
        
        if(!GPTResults){
            //error handling
        }
        
       const promiseArray = GPTResults.map((movie)=>getMovieSearchTMDB(movie)) 

       const tmdbResults = await Promise.all(promiseArray)

        dispatch(addMoviesCollectionAndName({moviesName:GPTResults,moviesCollection:tmdbResults}))

    }

    return handleSearchResults
}

export default useGPTResults