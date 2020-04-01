const router = require("express").Router();
const Controller = require("../controllers/todo");
const {authentication} = require("../middlewares/authentication");
const {authorization} = require("../middlewares/authorization");

router.use(authentication);
router.post("/", Controller.create);
router.get("/", Controller.showAll);
router.use(authorization);
router.get("/:id", Controller.showDatum);
router.put("/:id", Controller.update);
router.delete("/:id", Controller.delete);

module.exports = router;