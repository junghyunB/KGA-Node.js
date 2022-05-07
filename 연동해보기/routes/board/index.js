const express = require("express")
const router = express.Router()
const boardController = require("./boardController.js")

router.get("/list", boardController.list)
router.get("/write", boardController.write)
router.get("/update", boardController.update)
router.get("/view", boardController.view)

router.post("/write", boardController.writeAction)
router.post("/update", boardController.updateAction)

module.exports = router;
