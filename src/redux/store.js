import { configureStore } from '@reduxjs/toolkit';
import promoReducer from './slice/promoSlice';

const store = configureStore({
    reducer: {
        promo: promoReducer,
    },
});

console.log("onCreate store: ", store.getState());

store.subscribe(() => {
    console.log("store change", store.getState());
});

export default store;

