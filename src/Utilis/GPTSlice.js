import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
    name:'GPT',
    initialState:{
        gptView:false
    },
    reducers:{
        toggleGPTSearchView: (state,action) => {
            state.gptView = !state.gptView
        }
    }
})

export const {toggleGPTSearchView} = GPTSlice.actions
export default GPTSlice.reducer