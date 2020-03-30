const router = require("express").Router();
const Controller = require("../controllers/todos");

router.post("/todos", Controller.create);
router.get("/todos", Controller.showAll);
router.get("/todos/:id", Controller.showDatum);
router.put("/todos/:id", Controller.update);
router.delete("/todos/:id", Controller.delete);

module.exports = router;