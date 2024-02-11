import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import MovieRedcer from './MovieSlice'
import GPTReducer from './GPTSlice'

const AppStore = configureStore({

    reducer : {
        User : UserReducer,
        Movie : MovieRedcer,
        GPT : GPTReducer
        
    }
})

export default AppStore