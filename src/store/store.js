import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import productsSlice from './productsSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice
    }
});

export default store;
