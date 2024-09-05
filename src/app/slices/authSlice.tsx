import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    isFirstLaunch: boolean;
    role: 'patient' | 'professional' | 'admin' | 'nurse' | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isFirstLaunch: true,  // Assume app is launched for the first time
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<{ role: 'patient' | 'professional'}>) => {
            state.isAuthenticated = true;
            state.role = action.payload.role;
        },
        setFirstLaunch: (state, action: PayloadAction<boolean>) => {
            state.isFirstLaunch = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.role = null;
        },
    },
});

export const {setAuthenticated, logout, setFirstLaunch} = authSlice.actions;
export default authSlice.reducer;