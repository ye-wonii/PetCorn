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
const userList = [
  { id: "tlsdltkr2530", email: "tlsdltkr2530@gmail.com", pw: "tlsdltkr-44" },
  { id: "towel1017", email: "towel1017@naver.com", pw: "towel-1017" },
];
const findId = (id) => {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === id) {
      return i;
    }
  }
  return -1;
};

userRouter.post("/login", (req, res) => {
  var sess;
  const email = req.body.data.email;
  const pw = req.body.data.pw;
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
              res.cookie("user", userid, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true,
              });
              req.session = session({
                key: "sid",
                secret: "secret",
                resave: false,
                saveUninitialized: true,
                cookie: {
                  maxAge: 24000 * 60 * 60,
                },
              });
              sess = req.session;
              sess.name = name;
              console.log(sess.name);
              sess.email = email;
              res.status(200).send(sess.name);
            } else {
              res.status(200).send({ error: "패스워드가 다릅니다" });
            }
          }
        );
      } else {
        res.status(200).send({ error: "아이디가 존재하지 않습니다" });
      }
    }
  );
});
userRouter.post("/register", (req, res) => {
  const { name, email, pw } = req.body.data;
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
