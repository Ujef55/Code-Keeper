import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    keeper: localStorage.getItem('keeper') ? JSON.parse(localStorage.getItem('keeper')) : []
}

export const keeperSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToKeeper: (state, action) => {
            state.value += 1
        },
        updateToKeeper: (state) => {
            state.value -= 1
        },
        resetKeeper: (state, action) => {
            state.value += action.payload
        },
        removeFromKeeper: (state) => {
            state.value -= 1
        }
    },
})

export const { addToKeeper, updateToKeeper, resetKeeper, removeFromKeeper } = keeperSlice.actions

export default keeperSlice.reducer