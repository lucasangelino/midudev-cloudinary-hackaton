const { response } = require("express");
const { optimizeWebImages } = require("../services/optimize");

const optimize = async (req, res = response) => {
  const url = req.body.url;
  const data = await optimizeWebImages(url);

  res.json({
    ok: true,
    url,
    data,
  });
};

module.exports = {
  optimize,
};
