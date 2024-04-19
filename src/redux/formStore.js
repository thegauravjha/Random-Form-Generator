import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Slices/formSlice"

const formStore = configureStore({
    reducer: {
        form: formReducer
    }
});

export default formStore;