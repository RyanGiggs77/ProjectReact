import { createSlice } from '@reduxjs/toolkit';

const promoSLice = createSlice({
    name: "promo",
    initialState: {
        data: []
    },
    reducers: {
        addPromo(state, action)  {
            const itemInPromo = state.data.find((item) => item.id === action.payload.id);
            state.data.push(action.payload);
        },
        deletePromo(state, action) {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
        },
        editPromo(state, action) {
            const itemIndex = state.data.findIndex((item) => item.id === action.payload.id);
            state.data[itemIndex] = action.payload;
        }
    },
});

export const { addPromo, editPromo, deletePromo } = promoSLice.actions;
export default promoSLice.reducer;