import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isAuthenticated: false,
    token: '',
    role: null,
    email: '',
    institute: '',
    course: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication(state, action) {
            state.isAuthenticated = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setRole(state, action) {
            state.role = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setInstitute(state, action) {
            state.institute = action.payload
        },
        setCourse(state, action) {
            state.course = action.payload
        }
    }
})

export const { setAuthentication, setToken, setRole, setEmail, setInstitute, setCourse} = authSlice.actions;
export default authSlice.reducer;