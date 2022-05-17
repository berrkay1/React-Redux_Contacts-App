import {configureStore} from '@reduxjs/toolkit';
import ContactSlice from './ContactSlice';

export const store = configureStore({
    reducer:{
        contacts:ContactSlice,
    }
})