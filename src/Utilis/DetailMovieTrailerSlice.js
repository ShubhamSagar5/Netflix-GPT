import { createSlice } from "@reduxjs/toolkit";


const DetailMovieTrailerSlice = createSlice({
    name:'deatiltrailer',
    initialState:{
        trailerView:false,
        trailerId:null
    },
    reducers:{
        toggleTrailerView:(state,action)=>{
            state.trailerView = !state.trailerView
        },
        addTrailerId:(state,action)=>{
            state.trailerId = action.payload
        }
    }

})

export const {toggleTrailerView,addTrailerId} = DetailMovieTrailerSlice.actions
export default DetailMovieTrailerSlice.reducer