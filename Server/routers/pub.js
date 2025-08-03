const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

//Public
router.get("/cuisines", Controller.getPubCuisines);
router.get("/cuisines/:id", Controller.findPubCuisines);
router.get("/categories", Controller.getPubCategories);

module.exports = router;
