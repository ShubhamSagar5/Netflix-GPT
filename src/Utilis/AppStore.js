import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import MovieRedcer from './MovieSlice'


const AppStore = configureStore({

    reducer : {
        User : UserReducer,
        Movie : MovieRedcer,
        
    }
})

export default AppStore