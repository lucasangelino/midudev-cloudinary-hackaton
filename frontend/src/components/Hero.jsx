import React, { useContext } from "react";
import { getUrlInfo } from "../services/getUrlInfo";
import { OptimizationContext } from "../context/Optimization";

export const Hero = () => {
  const [URL, setURL] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { nodesToOptimize, setNodesToOptimize } = useContext(OptimizationContext);

  const handleChange = (e) => {
    setURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const nodesToOptimize = await getUrlInfo(URL);
    setNodesToOptimize(nodesToOptimize);
    setIsLoading(false);
  };

  return (
    <div className="mt-12 mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
      <Title />
      <Form onSubmit={handleSubmit} onChange={handleChange} isLoading={isLoading} />
    </div>
  );
};

const Title = () => (
  <section className="flex flex-col gap-4">
    <h1 className="text-7xl text-white font-bold">OptiPic</h1>
    <p className="text-xl text-slate-300">
      Dale un{" "}
      <span className="bg-gray-100 text-gray-800 text-lg font-medium px-2.5 py-0.5 rounded-full ">boost</span> a tu
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

const Form = ({ onSubmit, onChange, isLoading }) => (
  <>
  <section className="flex flex-col justify-center items-start gap-2 py-3">
    <form action="" className="w-full flex flex-col gap-2" onSubmit={onSubmit}>
      <label htmlFor="urlInput" className="text-white text-2xl">
        Url de tu sitio
      </label>
      <div className="flex flex-row gap-2">
        <input
          id="urlInput"
          type="website"
          placeholder="genbeta.com"
          className="w-full p-2 rounded-md bg-slate-200 text-slate-900"
          onChange={onChange}
        />
        {
          isLoading ? (
            <button onClick={onSubmit} disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center h-full">
              <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Loading...
            </button>
          ) : 
          (
            <button onClick={onSubmit} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none h-full">Optimizar</button>
          )
        }
      </div>
    </form>
    <div className="flex flex-col justify-start items-start text-white gap-4">
      <h3 className="text-xs">¿No hay url? Prueba una de estas:</h3>
      <ul className="flex flex-row justify-start items-center gap-4">
        <li className="">
          <a href="" className="text-blue-700 bg-white p-2 rounded-md font-semibold">
            genbeta.com
          </a>
        </li>
      </ul>
    </div>
  </section>

    {
      isLoading ? (
        <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Cargando... </span> Optipic esta buscando las imagenes de tu sitio. Esto puede tardar unos segundos...
          </div>
        </div>
      ) : ''
    }
  </>
);
