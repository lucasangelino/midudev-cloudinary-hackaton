import React, { useContext } from "react";
import { OptimizationContext } from "../context/Optimization";

export const Optimization = () => {
  const { optimizedNodes } = useContext(OptimizationContext);

  return (
    <div className="my-20">
      <h1>Optimization</h1>
      <ul>
        {optimizedNodes.map((node) => (
          <li key={node.id}>
            <p>{"node.name"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
