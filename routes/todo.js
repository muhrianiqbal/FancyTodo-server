const router = require("express").Router();
const Controller = require("../controllers/todo");

router.post("/", Controller.create);
router.get("/", Controller.showAll);
router.get("/:id", Controller.showDatum);
router.put("/:id", Controller.update);
router.delete("/:id", Controller.delete);

module.exports = router;