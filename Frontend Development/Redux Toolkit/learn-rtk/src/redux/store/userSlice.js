import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { name: '' },
    reducers: {
        username: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { username } = userSlice.actions;
export default userSlice.reducer;