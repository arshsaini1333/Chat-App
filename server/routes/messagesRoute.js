const router = require("express").Router();
const controller = require("../controllers/messagesController.js");
router.post("/addMessage", controller.addMessage);

router.post("/getMessage", controller.getAllMessage);

module.exports = router;
