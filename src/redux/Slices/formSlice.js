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
        updateItems: (state, action) => {
            const { formName, items } = action.payload;
            state.items.push({
                title: formName,
                fields: items.map(item => ({
                    label: item.label_name,
                    type: item.fieldType,
                    options: item.options ? item.options.map(option => option.option) : [],
                    rules: item.required ? [{ required: true }] : []
                }))
            });
        },
        deleteForm: (state, action) => {
            const formName = action.payload;
            state.items = state.items.filter(item => item.title !== formName);
        }
    }
});

export const { updateItems, deleteForm } = formSlice.actions;
export default formSlice.reducer;