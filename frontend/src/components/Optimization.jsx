import React, { useContext } from "react";
import { OptimizationContext } from "../context/Optimization";

export const Optimization = () => {
  const { optimizedNodes } = useContext(OptimizationContext);

  return (
    <div className="my-20 px-10 max-w-4xl mx-auto">
      <h1 className="text-3xl">Optimization</h1>
      <ul className="flex flex-col gap-2">
        {optimizedNodes.data?.map((node) => (
          <li key={node.id}>
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-white shadow-sm rounded-box"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-md font-medium">
                <div className="flex flex-row gap-4">
                  <img
                    src="https://picsum.photos/50/50"
                    height={50}
                    width={50}
                    alt=""
                    className="rounded-md"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-4">
                      <h4 className="text-slate-900 font-bold">
                        Titulo de la Imagen
                      </h4>
                      <div className="badge badge-outline">JPG</div>
                    </div>
                    <span className="text-slate-400 text-xs">
                      an analizado a los profesionales más demandados{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="collapse-content">
                <hr class="h-px my-8 bg-gray-200 border-0" />
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col items-center gap-4">
                    <span>Tu codigo optimizado deberia verse asi:</span>
                    <div className="mockup-code max-w-xl">
                      <pre>
                        <code>
                          &lt;img width="28px" height="40px"{" "}
                          <strong className="text-yellow-500">
                            src="https://d2xe9cfud2dvf.cloudfront.net/Logos/mexico.svg"
                          </strong>{" "}
                          alt="logo-bandera-mexico"
                          loading="lazy"&gt;&lt;/img&gt;
                        </code>
                      </pre>
                    </div>
                  </div>

                  <button className="bg-blue-500 p-2">Copiar</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
