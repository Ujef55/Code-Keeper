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
        },
        updateToKeeper: (state, action) => {
            const updatedKeeper = action.payload;
            const index = state.keeper.findIndex(item => item.id === updatedKeeper.id);
            if (index !== -1) {
                state.keeper[index] = updatedKeeper;
                localStorage.setItem('keeper', JSON.stringify(state.keeper));
                toast.success('Keeper updated successfully');
            }
        },
        resetKeeper: (state) => {
            state.keeper = [];
            localStorage.setItem('keeper', JSON.stringify(state.keeper));
            toast.success('All your keepers are removed');
        },
        removeFromKeeper: (state, action) => {
            const keeperId = action.payload;
            state.keeper = state.keeper.filter(item => item.id !== keeperId);
            localStorage.setItem('keeper', JSON.stringify(state.keeper));
            toast.success('keeper removed successfully');
        },
        copyToClipBoard: (state, action) => {
            const contentToBeCopied = action.payload;
            navigator.clipboard.writeText(contentToBeCopied);
            toast.success('Content copied');
        }
    },
})

export const { addToKeeper, updateToKeeper, resetKeeper, removeFromKeeper, copyToClipBoard } = keeperSlice.actions

export default keeperSlice.reducer