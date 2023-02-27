const { response } = require("express");
const { optimizeWebImages } = require("../services/optimize");

const optimize = async (req, res = response) => {
  const { url } = req;
  const data = await optimizeWebImages(url);

  res.json({
    ok: true,
    user: "user",
    data,
  });
};

module.exports = {
  optimize,
};
