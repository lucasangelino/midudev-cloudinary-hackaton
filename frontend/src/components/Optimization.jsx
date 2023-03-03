import React, { useContext, useEffect } from "react";
import { OptimizationContext } from "../context/Optimization";
import data from "../services/mock.json"
import { Image } from "./Image";

export const Optimization = () => {
  const { nodesToOptimize } = useContext(OptimizationContext);

  useEffect(() => {
    console.log('Optimization Component... ');
  }, []);

  return (
    <div className="my-20 px-10 max-w-4xl mx-auto">
      <h1 className="text-3xl">Optimization</h1>
      <ul className="flex flex-col gap-2">
        {nodesToOptimize.data?.map((nodesToOptimize, index) => (
          <li key={index}>
            <Image imgToOptimize={nodesToOptimize} />
          </li>
        ))}
      </ul>
    </div>
  );
};
