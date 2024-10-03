import { configureStore } from '@reduxjs/toolkit'
import keeperSlice from '../features/keeper/keeperSlice'

export const store = configureStore({
    reducer: {
        keeper: keeperSlice
    },
})