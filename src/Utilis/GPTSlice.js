import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
    name:'GPT',
    initialState:{
        gptView:false,
        moviesName:null,
        moviesCollection:null,

    },
    reducers:{
        toggleGPTSearchView: (state,action) => {
            state.gptView = !state.gptView
        },
        addMoviesCollectionAndName:(state,action) => {
            const {moviesName,moviesCollection} = action.payload
            state.moviesName = moviesName
            state.moviesCollection = moviesCollection
        }
    }
})

export const {toggleGPTSearchView,addMoviesCollectionAndName} = GPTSlice.actions
export default GPTSlice.reducer