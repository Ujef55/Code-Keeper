import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    keeper: localStorage.getItem('keeper') ? JSON.parse(localStorage.getItem('keeper')) : []
}

export const keeperSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToKeeper: (state, action) => {
            const keeper = action.payload;
            state.keeper.push(keeper);
            localStorage.setItem('keeper', JSON.stringify(state.keeper));
            toast.success('Keeper created successfully');
            console.log(initialState);
        },
        updateToKeeper: (state) => {

        },
        resetKeeper: (state, action) => {

        },
        removeFromKeeper: (state) => {

        }
    },
})

export const { addToKeeper, updateToKeeper, resetKeeper, removeFromKeeper } = keeperSlice.actions

export default keeperSlice.reducer