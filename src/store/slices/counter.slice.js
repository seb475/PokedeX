import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
	name: 'counter',
    initialState: 0,
    reducers: {
      
        increment : ( state, action ) => {
            return state + 1
        },
        decrement : (state, action) => {
            return state - 1
        },
        setValue : ( state, action ) => {
            console.log(action)
            return action.payload
        }

    }
})

export const { increment, decrement, setValue } = counterSlice.actions;

export default counterSlice.reducer;