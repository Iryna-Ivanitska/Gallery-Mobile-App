import { configureStore } from '@reduxjs/toolkit'
import pictureReducer from './Reducers';

const store = configureStore({reducer: pictureReducer})

export default store;