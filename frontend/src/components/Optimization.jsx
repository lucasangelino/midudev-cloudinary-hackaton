import React, { useContext, useEffect } from "react";
import { OptimizationContext } from "../context/Optimization";
import data from "../services/mock.json"
import { optimizeImg } from "../services/optimizeImg";
import { useImage } from "../hooks/useImage";

export const Optimization = () => {
  const { optimizedNodes } = useContext(OptimizationContext);
  const { isLoading, imageData } = useImage(optimizedNodes);

  useEffect(() => {
    console.log('Optimizing... ');
    //optimizeImg({});
  }, []);

  console.log('Optimization: ', imageData);

  return (
    <div className="my-20 px-10 max-w-4xl mx-auto">
      <h1 className="text-3xl">Optimization</h1>
      <ul className="flex flex-col gap-2">
        {data.data?.map((node) => (
          <li key={node.id}>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
