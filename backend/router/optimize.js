const { Router } = require("express");
const { check } = require("express-validator");
const { optimize } = require("../controllers/optimize");
const { validateField } = require("../middlewares/fieldValidator");

const router = Router();

router.get(
  "/",
//   [
//     check("weburl", "Web Url is mandatory").not().isEmpty(),
//     check("weburl", "Web Url is mandatory").isURL(),
//     validateField,
//   ],
  optimize
);

module.exports = router;