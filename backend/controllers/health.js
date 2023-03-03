const { response } = require("express");

const health = async (req, res = response) => {
  res.json({
    ok: true,
    "server-alive": "true",
  });
};

module.exports = {
  health,
};
