module.exports = (app) => {
  const tutorialControllers = require("../controller/tutorial.controller");
  const router = require("express").Router();

  router.post("/", tutorialControllers.create);
  router.get("/", tutorialControllers.findAll);
  router.get("/:id", tutorialControllers.findOne);
  router.patch("/", tutorialControllers.update);
  router.delete("/:id", tutorialControllers.deleteOne);
  router.delete("/", tutorialControllers.deleteAll);
  router.get("/:title", tutorialControllers.findTitle);

  app.use("/api/tutorials", router);
};
