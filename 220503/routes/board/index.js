const express = require("express")
const router = express.Router()
const BoardController = require("./board.controller.js")

router.get("/list", BoardController.list)
router.get("/view", BoardController.view)
router.get("/write", BoardController.write)
router.get("/update", BoardController.update)

router.post("/write", BoardController.writeAction)

module.exports = router;