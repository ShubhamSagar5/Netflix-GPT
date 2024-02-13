import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import MovieRedcer from './MovieSlice'
import GPTReducer from './GPTSlice'
import SelectLangugeReducer from './LanguageSlice'
import DetailMovieTrailerReducer from './DetailMovieTrailerSlice'

const AppStore = configureStore({

    reducer : {
        User : UserReducer,
        Movie : MovieRedcer,
        GPT : GPTReducer,
        SelectLanguge : SelectLangugeReducer,
        DetailTrailer : DetailMovieTrailerReducer
    }
})

export default AppStore