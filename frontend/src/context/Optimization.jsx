import React, { createContext } from "react";

export const OptimizationContext = createContext();
OptimizationContext.displayName = "ImagesContext";

export function OptimizationProvider({ children }) {
  const [nodesToOptimize, setNodesToOptimize] = React.useState([]);

  return (
    <OptimizationContext.Provider
      value={{
        nodesToOptimize,
        setNodesToOptimize,
      }}
    >
      {children}
    </OptimizationContext.Provider>
  );
}
