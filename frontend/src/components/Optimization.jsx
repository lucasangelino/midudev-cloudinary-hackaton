import React, { useContext } from "react";
import { OptimizationContext } from "../context/Optimization";

export const Optimization = () => {
  const { optimizedNodes } = useContext(OptimizationContext);

  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-3xl">Optimization</h1>
      <ul className="flex flex-col gap-2">
        {optimizedNodes.data?.map((node) => (
          <li key={node.id}>
            <div className="collapse rounded-md ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg">
                Click me to show/hide content
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-">
                <p>hello</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
