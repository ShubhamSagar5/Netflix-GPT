import { useEffect } from "react"
import { API_OPTION } from "../Utilis/Constant"
import Header from "./Header"



const Browse = () => {

    const getMovies = async() => {
        const fetchData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTION)
        const data = await fetchData.json()
        console.log(data)
    }

    useEffect(()=>{
        getMovies()
    },[])

    return (
        <div>
            <Header/>
        </div>
    )
}


export default Browse