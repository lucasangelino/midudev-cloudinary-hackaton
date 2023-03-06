import React from "react";
import { ImageLoading } from "./ImageLoading"
import { useImage } from "../hooks/useImage";

export const Image = ({imgToOptimize}) => {
    const { 
        isLoading, 
        hasError, 
        imageData,
    } = useImage({imgToOptimize});

    const {
        alt,
        nodeName,
        outerHtml,
        bytes,
        secure_url,
        originalSize,
        oldFormat,
        newFormat,
    } = imageData;

    const Error = () => <span className="bg-red-500 text-white p-1 rounded-md">Error</span>;


    if (isLoading) {
      return <ImageLoading />;
    }

    if (hasError) {
        return <Error />;
    }

    return (
        <div
              tabIndex={0}
              className="collapse collapse-arrow bg-white shadow-sm rounded-box"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-md font-medium">
                <div className="flex flex-row gap-4">
                  <img
                    src={secure_url}
                    height={50}
                    width={50}
                    alt={alt}
                    className="rounded-md h-20 w-20 object-contain"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-4">
                      <h4 className="text-slate-900 font-bold">
                        {alt}
                      </h4>
                      <div className="badge badge-outline">{nodeName}</div>
                      <div className="badge badge-outline">{ oldFormat }</div>
                    </div>
                    <span className="text-slate-400 text-xs">
                      {alt}
                    </span>
                    {/* <div className="flex flex-row gap-2 items-center">
                      <span className="text-xs">Tamaño en el sitio: </span>
                      <span className="text-xs text-red-600">{ originalSize }</span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="collapse-content">
                <hr className="h-px my-8 bg-gray-200 border-0" />
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                          <span className="text-sm">Tamaño optimizado:</span> 
                          <span className="text-sm text-green-600 font-bold">{ (bytes / 2014).toFixed(1) } Kb</span>
                          {/* <div className="badge text-green-500 badge-outline">AHORRO 54%</div> */}
                        </div>
                        <div className="flex flex-row gap-2">
                          <span className="text-sm">Nuevo formato:</span> 
                          <div className="badge badge-outline text-green-500">{newFormat}</div>
                        </div>
                      </div>
                      <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Descargar</button>
                    </div>
                    <h3>Tu codigo deberia verse así:</h3>
                    <div className="mockup-code max-w-3xl my-2">
                      <pre>
                        <code>
                          &lt;img {""}
                          <strong className="text-yellow-500">
                          <span>{`src=${secure_url}`}</span>
                          </strong>{" "}
                          alt="cloudinary image"
                          width="28px" height="40px"{" "}
                          loading="lazy"&gt;&lt;/img&gt;
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}