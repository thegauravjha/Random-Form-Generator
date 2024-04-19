import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: "cart",
    initialState: {
        items: [
            {
                title: "Sample Form",
                fields: [
                    {
                        label: 'Name',
                        type: 'input',
                        rules: [{
                            required: true,
                        }]
                    },
                    {
                        label: 'Gender',
                        type: 'dropdown',
                        options: ["Male", "Female", "Other"],
                        rules: [{
                            required: false,
                        }]
                    },
                    {
                        label: 'Skills',
                        type: 'checkbox',
                        options: ["React.js", "Redux", "Next.js", "AWS"],
                        rules: [{
                            required: true,
                        }]
                    },
                    {
                        label: 'Are You Willing to Relocate',
                        type: 'radio',
                        options: ["Yes", "No"],
                        rules: [{
                            required: true,
                        }]
                    },
                    {
                        label: 'Upload Your Resume',
                        type: 'upload',
                        rules: [{
                            required: true,
                            maxFileSize: "10", //in mb, 10mb,
                            fileSupport: ["pdf", "jpg", "docs", "png"]
                        }]
                    }
                ]
            },
            {
                title: "FeedBack Form",
                fields: [
                    {
                        label: 'Name',
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