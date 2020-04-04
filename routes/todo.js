const router = require("express").Router();
const Controller = require("../controllers/todo");
const {authentication} = require("../middlewares/authentication");
const {authorization} = require("../middlewares/authorization");

router.use(authentication);
router.post("/", Controller.create);
router.get("/", Controller.showAll);
router.get("/weather", Controller.weather);
router.get("/:id", authorization, Controller.showDatum);
router.put("/:id", authorization, Controller.update);
router.delete("/:id", authorization, Controller.delete);

module.exports = router;