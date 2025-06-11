const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();
const pubRouter = require("./pub");

const {
  authentication,
  authorization,
  onlyAdmin,
  middlewareMulter,
} = require("../middlewares/middleware");

//Log in
router.post("/login", Controller.createLogin);

router.use("/pub", pubRouter);

//Middleware accesToken or authentication
router.use(authentication);

//Register
router.post("/add-user", onlyAdmin, Controller.createRegister);

//Utama
router.post("/cuisines", Controller.createCuisine);
router.get("/cuisines", Controller.getCuisines);
router.get("/cuisines/:id", Controller.findCuisines);
router.put("/cuisines/:id", authorization, Controller.putCuisines);
router.patch(
  "/cuisines/update/:id",
  middlewareMulter,
  authorization,
  Controller.patchCuisines
);
router.delete("/cuisines/:id", authorization, Controller.deleteCuisines);

//Support
router.post("/categories", Controller.createCategory);
router.get("/categories", Controller.getCategories);
router.put("/categories/:id", Controller.putCategories);

module.exports = router;
