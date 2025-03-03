import { createStore } from "redux";

// reducer
const promoReducer = (
    state = {
        promo: [{}],
    },
    action
) => {
    switch (action.type) {
        case "ADD_PROMO":
            return {
                ...state,
                promo: [...state.promo, action.payload],
            };
        default:
            return state;
    }
}

// store
const store = createStore(promoReducer);
console.log("oncreate store", store.getState());

// subcribe
store.subscribe(() => {
    console.log("store change", store.getState());
});

// dispatch
const action1 = {type: "ADD_PROMO", payload: {id: 1, name: "Promo 1"}};
store.dispatch(action1);