const express = require("express");
const petRouter = express.Router({
  caseSensitive: false,
});
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "tlsdltkr44",
  database: "dogcorn",
});
petRouter.post("/", (req, res) => {
  const IS_PET_POST_QUERY = `select exists (select userid from petinfo where userid = "${req.session.email}") as "is_pet";`;
  conn.query(IS_PET_POST_QUERY, (err, rows, field) => {
    if (err) throw err;
    res.status(200).send(rows[0]);
  });
});
petRouter.post("/info", (req, res) => {
  const PET_INTO_POST_QUERY = `
  select user.name, petname, sex, kind, age, date_format(birthday, '%Y-%m-%d') as "birthday", is_neu
  from user, petinfo
  where petinfo.userid = user.userid and petinfo.userid = '${req.session.email}';`;
  console.log(req.session.email);
  conn.query(PET_INTO_POST_QUERY, (err, rows, field) => {
    if (err) throw err;
    res.status(200).send(rows[0]);
  });
});
petRouter.get("/enroll", (req, res) => {
  res.json({ username: "isacc" });
});

module.exports = petRouter;
