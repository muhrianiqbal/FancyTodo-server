const router = require("express").Router();
const Controller = require("../controllers/todo");

router.post("/login", Controller.create);
router.post("/register", Controller.showAll);

module.exports = router;