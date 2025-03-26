import {configureStore} from '@reduxjs/toolkit';
import counterSliceReducer from './counterSlice';
import namerSliceReducer from './nameSlice';
import configDetailsReducer from './configSlice';

const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        namer: namerSliceReducer,
        configDetails: configDetailsReducer
    }
});

export default store;