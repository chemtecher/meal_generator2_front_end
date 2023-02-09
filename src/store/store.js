import { configureStore } from "@reduxjs/toolkit";
import loginReducers from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        login: loginReducers,
    },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())