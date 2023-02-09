import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState, 
    reducers: {
        setLogin: (state, { payload }) => {
            state.token = payload
            // console.log('setLogin')
        },
        setLogout: (state) => {
            state.token = null
            // console.log('setLogout')
            
        },

    },
})

export const { setLogin, setLogout } = loginSlice.actions

export default loginSlice.reducer
// export default counterSlice.reducers