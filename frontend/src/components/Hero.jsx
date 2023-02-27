import React from "react";

export const Hero = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const res = await fetch("http://localhost:4000/optipic/api/v1/optimize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: "genbeta.com" }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="px-4 py-40 mx-auto grid grid-cols-2 gap-2 max-w-6xl">
      <Title />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

const Title = () => (
  <section className="flex flex-col">
    <h1 className="text-8xl text-white font-bold my-4">OptiPic</h1>
    <p className="my-8 text-xl text-slate-200">
      Dale un{" "}
      <span className="bg-blue-500 p-1 rounded-lg text-white">boost</span> a tu
      web! Optipic te permite analizar cualquier sitio web en segundos. Con
      reportes, código y mucho mas..{" "}
    </p>
    <p className="text-xl text-slate-200">
      Automatico, rápido y{" "}
      <span className="bg-blue-500 p-1 rounded-lg text-white">gratis</span>
    </p>
  </section>
);

const Form = ({ onSubmit }) => (
  <section className="flex flex-col justify-center items-center p-3">
    <form action="" className="w-full" onSubmit={onSubmit}>
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
    <div className="flex flex-row justify-start items-center text-white">
      <h3>¿No hay url? Prueba una de estas:</h3>
      <ul className="flex flex-row justify-start items-center">
        <li className="mx-2">
          <a href="#" className="text-blue-700">
            genbeta.com
          </a>
        </li>
        <li className="mx-2">
          <a href="#" className="text-blue-700">
            infobae.com
          </a>
        </li>
      </ul>
    </div>
  </section>
);
