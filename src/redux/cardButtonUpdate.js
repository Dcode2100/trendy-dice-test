import { createSlice } from "@reduxjs/toolkit";


export const cardButtonUpdate = createSlice({
    name: 'cardButtonUpdate',
    initialState: {
        cardButtonUpdate: 1
    },
    reducers: {
        toggleCardButton: (state) => {
          state.cardButtonUpdate = state.cardButtonUpdate === 0 ? 1 : 0;
        },
    }
});

export const { toggleCardButton } = cardButtonUpdate.actions;

export default cardButtonUpdate.reducer;