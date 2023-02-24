const { response } = require("express");

const optimize = async (req, res = response) => {
    res.json({
      ok: true,
      user: "user",
    });
  };
  
  module.exports = {
    optimize
  };
