const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

//Utama
router.post("/cuisines", Controller.createCuisine);
router.get("/cuisines", Controller.X);
router.get("/cuisines/:id", Controller.X);
router.put("/cuisines/:id", Controller.X);
router.delete("/cuisines/:id", Controller.X);

//Support
router.post("/categories", Controller.X);
router.get("/categories", Controller.X);
router.put("/categories/:id", Controller.X);

//Public
router.get("/public/cuisines", Controller.X);
router.get("/public/cuisines/:id", Controller.X);

module.exports = router;
