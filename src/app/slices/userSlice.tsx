import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface UsersState {
    name: string;
    email: string;
    password: string;
}

const initialState: UsersState = {
    name: '',
    email: '',
    password: '',
}

const userSlice =  createSlice({
   name: 'user',
   initialState,
   reducers: {
     setUser(state, action: PayloadAction<UsersState>) {
        state.name = action.payload.name
        state.email = action.payload.email
        state.email = action.payload.password
     }
   }
})


export const {setUser} = userSlice.actions;
export default userSlice.reducer