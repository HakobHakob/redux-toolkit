import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"

export default configureStore({
    reducer:{
        todos:todoReducer,
        // user:userReducer -> sa kgrenq, ete unenanq mi hat el userSlice u senc sharunak
    }
})