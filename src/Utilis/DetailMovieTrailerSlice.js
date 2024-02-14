import { createSlice } from "@reduxjs/toolkit";


const DetailMovieTrailerSlice = createSlice({
    name:'deatiltrailer',
    initialState:{
        trailerView:false,
        trailerId:null,
        trailerTitle:null,
        trailerOverView:null,
        trailerReleaseDate:null
    },
    reducers:{
        toggleTrailerView:(state,action)=>{
            state.trailerView = !state.trailerView
        },
        addTrailerId:(state,action)=>{
            state.trailerId = action.payload
        },
        addtrailerTitle:(state,action)=>{
            state.trailerTitle = action.payload
        },
        addTrailerOverView:(state,action)=>{
            state.trailerOverView = action.payload
        },
        addTrailerReleaseDate:(state,action)=>{
            state.trailerReleaseDate = action.payload
        }
    }

})

export const {toggleTrailerView,addTrailerId,addtrailerTitle,addTrailerOverView,addTrailerReleaseDate} = DetailMovieTrailerSlice.actions
export default DetailMovieTrailerSlice.reducer