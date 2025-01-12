import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState: any = {
    isAuthenticated: false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
     testFunction(){

     }

    },
})

export const { testFunction } = authSlice.actions

export default authSlice.reducer