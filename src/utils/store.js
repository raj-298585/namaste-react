import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Create and configure a new redux store instance.
/**
 * A redux store is an object that holds the state of your application.
 */
const store = configureStore({
    reducer:{
        carts:cartReducer
    }
});

export default store;