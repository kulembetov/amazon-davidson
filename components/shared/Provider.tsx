"use client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";
import React from "react";
import { persistedStore } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistedStore}>{children}</PersistGate>
    </ReduxProvider>
  );
};

export default Provider;
