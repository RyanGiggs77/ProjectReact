// import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// // kode dibawah digunakan untuk membuat store, action, dan reducer dengan menggunakan redux toolkit
// const addPromo = createAction('ADD_PROMO');
// const login = createAction('LOGIN');

// // reducer
// const promoReducer = createReducer([], (builder) => {
//     builder.addCase(addPromo, (state, action) => {
//         state.push(action.payload);
//     });
// });

// const loginReducer = createReducer({status: false}, (builder) => {
//     builder.addCase(login, (state, action) => {
//         state.status = true;
//     });
// });

// // store
// const store = configureStore({
//     reducer: {
//         login: loginReducer,
//         promo: promoReducer,
//     },
// })

// // kode dibawah digunakan untuk menampilkan hasil dari store
// console.log("oncreate store", store.getState());

// // subcribe
// store.subscribe(() => {
//     console.log("store change", store.getState());
// });

// // dispatch
// store.dispatch(addPromo({ id: 1, name: 'Promo 1' }));
// store.dispatch(login());