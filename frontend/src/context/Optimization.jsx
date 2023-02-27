import React, { createContext } from "react";

export const OptimizationContext = createContext();
OptimizationContext.displayName = "ImagesContext";

export function OptimizationProvider({ children }) {
  const [optimizedNodes, setOptimizedNodes] = React.useState([]);

  return (
    <OptimizationContext.Provider
      value={{
        optimizedNodes,
        setOptimizedNodes,
      }}
    >
      {children}
    </OptimizationContext.Provider>
  );
}
