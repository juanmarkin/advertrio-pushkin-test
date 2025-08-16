import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sharedSlice } from './shared.slice';

const rootReducer = combineReducers({
    [sharedSlice.name]: sharedSlice.reducer,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
