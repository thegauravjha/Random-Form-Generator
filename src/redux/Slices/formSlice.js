import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: "cart",
    initialState: {
        items: [
            {
                title: "Sample Form",
                fields: [
                    {
                        lable: 'Name',
                        type: 'input',
                        rules: [{
                            required: true,
                        }]
                    },
                    {
                        lable: 'Gender',
                        type: 'dropdown',
                        options: ["Male", "Female", "Other"],
                        rules: [{
                            required: false,
                        }]
                    }
                ]
            },
            {
                title: "FeedBack Form",
                fields: [
                    {
                        lable: 'Name',
                        type: 'input',
                        rules: [{
                            required: true,
                        }]
                    }
                ]
            }
        ]
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