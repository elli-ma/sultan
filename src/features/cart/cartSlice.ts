import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { Product } from '../../types'

interface CartState {
    value: {amount: number, product: Product }[]
}

const initialState: CartState = {
    value: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            const i = state.value.findIndex(x => x.product.id == action.payload.id)
            if(i === -1) {
                state.value.push({amount: 1, product: action.payload})
            } else {
                state.value[i].amount += 1
            }
        },
        removeProduct: (state, action: PayloadAction<{id: number}>) => {
            const i = state.value.findIndex(x => x.product.id == action.payload.id)
            if (i !== -1) {
                state.value[i].amount -= 1;
            }
            state.value = state.value.filter(p => p.amount > 0)
        },
        clear: (state) => {
            state.value = []
        }
    }
})

export const { addProduct, removeProduct, clear } = cartSlice.actions;

export default cartSlice.reducer;