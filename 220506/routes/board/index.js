const express = require("express")
const router = express.Router()
const boardController = require("./boardController.js")

router.get("/list", boardController.list);
router.get("/view", boardController.view);
router.get("/write", boardController.write);
router.get("/update", boardController.update);

router.post("/write", boardController.writeAction)
router.post("/update", boardController.updateAction)
router.post("/delete", boardController.deleteAction)
router.post("/hit", boardController.hit)
router.post("/like", boardController.like)
module.exports = router;
