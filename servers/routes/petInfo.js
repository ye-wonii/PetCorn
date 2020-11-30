const express = require("express");
const petRouter = express.Router({
  caseSensitive: false,
});

petRouter.get("/info", (req, res) => {
  res.json({ username: "isacc" });
});
petRouter.get("/enroll", (req, res) => {
  res.json({ username: "isacc" });
});

module.exports = petRouter;
