import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: "cart",
    initialState: {
        items: 1
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearItems } = formSlice.actions;
export default formSlice.reducer;