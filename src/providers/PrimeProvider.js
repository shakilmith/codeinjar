import React from "react";
import { PrimeReactProvider } from "primereact/api";

export default function PrimeProvider({ children }) {
  const value = {
    ripple: true
  };

  return (
    <PrimeReactProvider value={value}>
      {children}
    </PrimeReactProvider>
  );
}