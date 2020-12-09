const express = require("express");
const userRouter = express.Router({
  caseSensitive: false,
});
const session = require("express-session");
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "tlsdltkr44",
  database: "dogcorn",
});

userRouter.post("/login", (req, res) => {
  var sess;
  const email = req.body.data.email;
  const pw = req.body.data.pw;
  console.log(email, pw);
  conn.query(
    `select exists (select userid from user where userid = "${email}") as "is_id";`,
    (err, rows, field) => {
      console.log(rows);
      if (err) throw err;
      if (rows[0].is_id !== 0) {
        conn.query(
          `SELECT * FROM user WHERE userid = "${email}"`,
          (err, rows, field) => {
            const { userid, name, password } = rows[0];
            if (err) throw err;
            if (password === pw) {
              sess = req.session;
              sess.email = email;
              sess.name = name;
              res.status(200).send({ sess: `${name}님 환영합니다!` });
            } else {
              res.status(403).send({ error: "패스워드가 다릅니다" });
            }
          }
        );
      } else {
        res.status(403).send({ error: "아이디가 존재하지 않습니다" });
      }
    }
  );
});
userRouter.post("/logout", (req, res) => {
  console.log("logout");
  req.session.destroy((err) => {
    if (err) throw err;
  });
  res.redirect("http://localhost:3000/");
});
userRouter.post("/register", (req, res) => {
  const { name, email, pw } = req.body;
  conn.query(
    `select exists (select userid from user where userid = "${email}") as "is_id";`,
    (err, rows, field) => {
      console.log(rows);
      if (err) throw err;
      if (rows[0].is_id === 0) {
        conn.query(
          `INSERT into user  values ('${email}', '${name}', '${pw}' );`,
          (err, rows, field) => {
            if (err) throw err;
            res.status(200).send({ email, name, pw });
          }
        );
      } else {
        res.status(200).send({ error: "이미 존재하는 이메일입니다" });
      }
    }
  );
});

module.exports = userRouter;
