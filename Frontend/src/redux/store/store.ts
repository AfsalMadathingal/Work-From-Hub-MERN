import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from '../slices/userSlice';
import businessUserSlice from '../slices/businessUserSlice';
import adminSlice from '../slices/adminSlice';

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['loading','error','modal'], 
};

const businessUserPersistConfig = {
  key: 'businessUser',
  storage,
  blacklist: ['loading','error','modal'], 
};


const adminPersistConfig = {
  key: 'businessUser',
  storage,
  blacklist: ['loading','error','modal'], 
};


const persistAdmin = persistReducer(adminPersistConfig,adminSlice)
const persistBusinessUser =persistReducer(businessUserPersistConfig,businessUserSlice)
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    businessUser:persistBusinessUser,
    admin:persistAdmin
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;