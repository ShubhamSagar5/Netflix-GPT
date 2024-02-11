import { createSlice } from "@reduxjs/toolkit";


const LanguageSlice = createSlice({
    name:"lan",
    initialState:{
        Language:"en"
    },
    reducers:{
        chooseLanguage:(state,action)=>{
            state.Language = action.payload
        }
    }
})

export const {chooseLanguage} = LanguageSlice.actions
export default LanguageSlice.reducer