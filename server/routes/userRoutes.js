const router = require("express").Router();
const controller = require("../controllers/userController");
router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/setAvatar/:id", controller.setAvatar);
router.get("/allUsers/:id", controller.getAllUsers);

module.exports = router;
