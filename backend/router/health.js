const { Router } = require("express");
const { health } = require("../controllers/health");

const router = Router();

router.get(
    "/",
    health
);

module.exports = router;

