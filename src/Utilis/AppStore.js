import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'

const AppStore = configureStore({

    reducer : {
        User : UserReducer
    }
})

export default AppStore