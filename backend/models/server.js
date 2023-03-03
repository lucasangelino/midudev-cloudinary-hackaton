// Servidor de Express
const express = require("express");
const http = require("http");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = 4000
    this.server = http.createServer(this.app);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use("/optipic/api/v1/optimize", require("../router/optimize"));
    this.app.use("/optipic/api/v1/health", require("../router/health"));
  }

  execute() {
    this.middlewares();

    this.server.listen(this.port, () => {
      console.log("Server running on port:", this.port);
    });
  }
}

module.exports = Server;