import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'

const LOCAL_STORAGE_KEY = 'XXXXXXXXXX'

function saveToLocalStorage(state: RootState) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_KEY, serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
