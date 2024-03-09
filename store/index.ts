import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartSlice } from "@/store/cartSlice";
import { ordersSlice } from "@/store/ordersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);
const persistedOrdersReducer = persistReducer(
  persistConfig,
  ordersSlice.reducer,
);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    orders: persistedOrdersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
