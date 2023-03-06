import React, { useContext, useEffect } from "react";
import { OptimizationContext } from "../context/Optimization";
import { HowToUse } from "./HowToUse";
import { Image } from "./Image";

export const Optimization = () => {
  const { nodesToOptimize } = useContext(OptimizationContext);

  return (
    <>
      <HowToUse />
      <div className="my-20 px-10 max-w-4xl mx-auto">
        <div className="border-2 bg-blue-200 p-4 border-blue-700 shadow-sm rounded-box my-5">
          <strong className="text-blue-500">👋 Midudev / Cloudinary Hackaton</strong>
          <p className="text-blue-500">
            Esta plataforma fue desarollada para la Hackaron realizada por <strong>Midudev y Cloudinary. </strong> 
            Se trata de un <strong>MVP. </strong>
            Aún esta en desarrollo 🛠️
          </p>
      </div>
        <ul className="flex flex-col gap-2">
          {nodesToOptimize.data?.map((nodesToOptimize, index) => (
            <li key={index}>
              <Image imgToOptimize={nodesToOptimize} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
