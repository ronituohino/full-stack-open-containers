const express = require("express")
const { getAsync } = require("../redis")
const router = express.Router()

router.get("/", async (req, res) => {
  todos = await getAsync("added_todos")
  res.send({ added_todos: todos })
})

module.exports = router
