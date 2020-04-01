const router = require("express").Router();
const todo = require("./todo");
const user = require("./user");
// const {authentication} = require("../middlewares/authentication");

router.use("/user", user);
// router.use(authentication);
router.use("/todos", todo);

module.exports = router;