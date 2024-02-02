import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn: "Isbn",
        author: "Author",
        title: "Title",
        length: "Length",
        type: "Type",
    },
    reducers: {
        chooseIsbn: (state, action) => { state.isbn = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseLength: (state, action) => { state.length = action.payload},
        chooseType: (state, action) => { state.type = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseIsbn, chooseAuthor, chooseTitle, chooseLength, chooseType} = rootSlice.actions