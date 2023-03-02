import React, { useContext, useEffect } from "react";
import { OptimizationContext } from "../context/Optimization";
import data from "../services/mock.json"
import { optimizeImg } from "../services/optimizeImg";

export const Optimization = () => {
  const { optimizedNodes } = useContext(OptimizationContext);


  useEffect(() => {
    console.log('Optimizing... ');
    //optimizeImg();
  }, []);

  return (
    <div className="my-20 px-10 max-w-4xl mx-auto">
      <h1 className="text-3xl">Optimization</h1>
      <ul className="flex flex-col gap-2">
        {data.data?.map((node) => (
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
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-4">
                      <h4 className="text-slate-900 font-bold">
                        Titulo de la Imagen
                      </h4>
                      <div className="badge badge-outline">JPG</div>
                    </div>
                    <span className="text-slate-400 text-xs">
                      an analizado a los profesionales más demandados{" "}
                    </span>
                    <div className="flex flex-row gap-2 items-center">
                      <span className="text-xs">Tamaño actual: </span>
                      <span className="text-xs text-red-600">3.6MB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-content">
                <hr class="h-px my-8 bg-gray-200 border-0" />
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                          <span className="text-sm">Tamaño optimizado:</span> 
                          <span className="text-sm text-green-600 font-bold">1.2KB</span>
                          <div className="badge text-green-500 badge-outline">AHORRO 54%</div>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span className="text-sm">Nuevo formato:</span> 
                          <div className="badge badge-outline">WEBP</div>
                        </div>
                      </div>
                      <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Descargar</button>
                    </div>
                    <div className="mockup-code max-w-3xl my-2">
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
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
