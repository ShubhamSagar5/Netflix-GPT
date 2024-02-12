import { useDispatch, useSelector } from "react-redux"
import language from "../Utilis/Language"
import { useRef } from "react"
import useGPTResults from "../CustomHook/useGPTResults"

const GPTSearchBar = () => {
    
  
    const selectLang = useSelector((store)=>store.SelectLanguge.Language)
   
    const searchText = useRef(null)

   const GPTResults = useGPTResults(searchText)

    const handleSearchResults = () => {
        GPTResults()      
    }



    return(
        <div>
             <div className=" pt-[10%]  flex justify-center">
            <form className=" bg-black grid grid-cols-12 w-1/2 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} className="p-3 m-3 col-span-10 rounded-lg" type="text" placeholder={language[selectLang].searchPlaceHolder} />
                <button className="bg-red-500 rounded-lg py-1 px-2 m-3 col-span-2" onClick={handleSearchResults}>{language[selectLang].btnName}</button>
            </form>
        </div>
        </div>
       
    )
}

export default GPTSearchBar