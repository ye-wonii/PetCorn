const express = require("express");
const router = express.Router({
  caseSensitive: false,
});

router.get("/login", (req, res) => {
  res.json({ username: "isacc" });
});
router.get("/register", (req, res) => {
  res.json({ username: "isacc" });
});

module.exports = router;
