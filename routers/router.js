const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

const { authentication, authorization } = require("../middlewares/middleware");

//Register & Log in
router.post("/add-user", Controller.createRegister);
router.post("/login", Controller.createLogin);

router.use(authentication);

//Utama
router.post("/cuisines", Controller.createCuisine);
router.get("/cuisines", Controller.getCuisines);
router.get("/cuisines/:id", Controller.findCuisines);
router.put("/cuisines/:id", authorization, Controller.putCuisines);
router.delete("/cuisines/:id", authorization, Controller.deleteCuisines);

//Support
router.post("/categories", Controller.createCategory);
router.get("/categories", Controller.getCategories);
router.put("/categories/:id", Controller.putCategories);

module.exports = router;
