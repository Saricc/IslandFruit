import { configureStore } from '@reduxjs/toolkit'
import { fruitSlice } from '../reducers/islandReducer'
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};
const persistedReducer = persistReducer(persistConfig, fruitSlice.reducer);

export const store = configureStore({
  reducer: {
    fruit: persistedReducer,
  },
  middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store);
