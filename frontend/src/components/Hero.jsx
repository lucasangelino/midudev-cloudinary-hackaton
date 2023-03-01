import React, { useContext } from "react";
import { optimizeUrl } from "../services/optimizeUrl";
import { OptimizationContext } from "../context/Optimization";

export const Hero = () => {
  const { optimizedNodes, setOptimizedNodes } = useContext(OptimizationContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const optimizedNodesList = await optimizeUrl("https://genbeta.com");
    setOptimizedNodes(optimizedNodesList);
  };

  return (
    <div className="mt-12 mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
      <Title />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

const Title = () => (
  <section className="flex flex-col gap-4">
    <h1 className="text-7xl text-white font-bold">OptiPic</h1>
    <p className="text-xl text-slate-300">
      Dale un{" "}
      <span class="bg-gray-100 text-gray-800 text-lg font-medium px-2.5 py-0.5 rounded-full ">boost</span> a tu
      web! Optipic te permite optimizar las imagenes de tu sitio en cuestion de segundos. Solo introduce tu URL y Optipic hará el resto. {" "
      }
    </p>
    <p className="text-2xl font-semibold text-purple-400">
      Automatico. {" "}
      <span>Rápido.</span>{" "}
      <span>Gratis.</span>
    </p>
  </section>
);

const Form = ({ onSubmit }) => (
  <section className="flex flex-col justify-center items-start gap-2 py-3">
    <form action="" className="w-full flex flex-col gap-2" onSubmit={onSubmit}>
      <label htmlFor="urlInput" className="text-white text-2xl">
        Url de tu sitio
      </label>
      <input
        id="urlInput"
        type="website"
        placeholder="genbeta.com"
        className="w-full p-2 rounded-md bg-slate-200 text-slate-900"
      />
    </form>
    <div className="flex flex-col justify-start items-start text-white gap-4">
      <h3 className="text-xs">¿No hay url? Prueba una de estas:</h3>
      <ul className="flex flex-row justify-start items-center gap-4">
        <li className="">
          <a href="#" className="text-blue-700 bg-white p-2 rounded-md font-semibold">
            genbeta.com
          </a>
        </li>
        <li className="">
        <a href="#" className="text-blue-700 bg-white p-2 rounded-md font-semibold shadow-xl">
            infobae.com
          </a>
        </li>
      </ul>
    </div>
  </section>
);
