import {
  combineReducers,
  configureStore
} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {
  persistReducer,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //defult local storage

const rootReducer = combineReducers({ //combine all reducers
  user: userReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables Redux serializable check for safe usage of Dates, Functions, Maps/Sets
    }),
});

export const persistor = persistStore(store);



