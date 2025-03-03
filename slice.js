import { configureStore, createSlice } from "@reduxjs/toolkit";


// kode dibawah digunakan untuk membuat store, action, dan reducer dengan menggunakan redux toolkit
// reducer
const promoSLice = createSlice({
    name: "promo",
    initialState: [],
    reducers: {
        addPromo(state, action)  {
            state.push(action.payload);
        },
    },
});

// store
const store = configureStore({
    reducer: {
        promo: promoSLice.reducer,
    },
})

// kode dibawah digunakan untuk menampilkan hasil dari store
console.log("oncreate store", store.getState());

// subcribe
store.subscribe(() => {
    console.log("store change", store.getState());
});

// dispatch
store.dispatch(promoSLice.actions.addPromo({ id: 1, name: 'Promo 1' }));
store.dispatch(promoSLice.actions.addPromo({ id: 2, name: 'Promo 2' }));