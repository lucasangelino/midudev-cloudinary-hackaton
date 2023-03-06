const { response } = require("express");
const { optimizeWebImages } = require("../services/optimize");

const optimize = async (req, res = response) => {
  const url = req.body.url;
  const data = await optimizeWebImages(url);

  if (!data) {
    return res.status(400).json({
      ok: false,
      msg: "Error al optimizar las imágenes",
    });
  } 
  
  res.json({
    ok: true,
    url,
    data,
  });
};

module.exports = {
  optimize,
};
