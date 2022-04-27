import { configureStore } from '@reduxjs/toolkit'
import PictureReducer from './Reducers';

const store = configureStore({reducer: PictureReducer})

export default store;