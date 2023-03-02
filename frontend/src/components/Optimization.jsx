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
              <div className="collapse-title bg-white text-primary-content peer-checked:bg">
                <div className="flex flex-row gap-4">
                  <img
                    src="https://picsum.photos/50/50"
                    height={50}
                    width={50}
                    alt=""
                    className="rounded-md"
                  />
                  <div className="flex flex-col gap-4">
                    <h4 className="text-slate-900 font-bold">
                      Titulo de la Imagen
                    </h4>
                    <span className="text-slate-400">
                      an analizado a los profesionales más demandados y mejor
                      pagados de la Darknet. Hacer el mal no sale a cuenta
                    </span>
                    <div className="flex flex-row justify-start gap-4">
                      <div className="badge badge-accent badge-outline">
                        Image Tag
                      </div>
                      <div className="badge badge-accent badge-outline">
                        With 390px
                      </div>
                      <div className="badge badge-accent badge-outline">
                        height 540px
                      </div>
                      <div className="badge badge-accent badge-outline">
                        fetchPriority "auto"
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0"></hr>
              </div>
              <div className="collapse-content bg-white text-primary-content peer-checked:bg-">
                <div className="mockup-code">
                  <pre data-prefix="$">
                    <code>npm i daisyui</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>{}</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>Done!</code>
                  </pre>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
