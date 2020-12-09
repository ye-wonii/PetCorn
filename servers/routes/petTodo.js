const express = require("express");
const todoRouter = express.Router({
  caseSensitive: false,
});
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "tlsdltkr44",
  database: "dogcorn",
});

todoRouter.get("/info", (req, res) => {
  res.json({ username: "isacc" });
});

todoRouter.get("/register", (req, res) => {
  res.json({ username: "isacc" });
});

module.exports = todoRouter;
