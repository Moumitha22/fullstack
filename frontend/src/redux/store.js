import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
import authSlice from './authSlice';
import storageSession from 'redux-persist/lib/storage/session'


const rootReducer = combineReducers({
    auth: authSlice
})

const persistConfig = {
    key: 'root',
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store);
export default store;