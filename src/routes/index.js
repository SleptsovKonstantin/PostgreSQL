module.exports = (app) => {
  const tutorialControllers = require("../controller/tutorial.controller");
  const router = require("express").Router();

  router.post("/create", tutorialControllers.create);
  router.get("/findAll", tutorialControllers.findAll);
  router.get("/findOne/:id", tutorialControllers.findOne);
  router.patch("/update", tutorialControllers.update);
  router.delete("/deleteOne/:id", tutorialControllers.deleteOne);
  router.delete("/deleteAll", tutorialControllers.deleteAll);
  router.get("/findTitle/:title", tutorialControllers.findTitle);

  app.use("/api/tutorials", router);
};
