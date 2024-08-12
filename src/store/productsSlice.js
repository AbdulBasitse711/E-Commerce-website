import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    productId: 0,
    productIndex: 0
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload;
        },
        setproductId: (state, action) => {
            state.productId = action.payload;
        },
        setProductIndex: (state, action) => {
            state.productIndex = action.payload;
        }
    }
})


export const { setProducts, setProductIndex, setproductId } = productsSlice.actions;

export default productsSlice.reducer;
