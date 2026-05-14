import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : "user",
    initialState:[],
    reducers:{
        getusers:(state,action)=>{
            // console.log(state)
            // // console.log(action.payload)\
            state = action.payload
            return(state)
        },
        addusers:(state,action)=>{
            state.push(action.payload)
            return state;
        },
        editusers:(state,action)=>{
            
        },
        deleteusers:(state,action)=>{
            // console.log(state)
            state = state.filter(v=>v.id !== action.payload)
            return state 
        }
    }

})
export const {getusers, deleteusers , addusers , editusers} = userSlice.actions
export default userSlice.reducer;