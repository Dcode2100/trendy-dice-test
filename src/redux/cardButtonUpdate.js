import { createSlice } from "@reduxjs/toolkit";


export const cardButtonUpdate = createSlice({
    name: 'cardButtonUpdate',
    initialState: {
        cardButtonUpdate: 0,
    },
    reducers: {
        toggleCardButton: (state) => {
          state.cardButtonUpdate = !state.cardButtonUpdate ;
        },
    }
});

export const { toggleCardButton } = cardButtonUpdate.actions;

export default cardButtonUpdate.reducer;