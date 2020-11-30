const bodyParser = require("body-parser");
const express = require("express");
const userRouter = require("./routes/user");
const petRouter = require("./routes/petInfo");
const mysql = require("mysql");
const session = require("express-session");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;
app.use(
  session({
    HttpOnly: true,
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true, // 세션이 필요하기 전까지는 세션을 구동시키지 않는다(true)
  })
);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.set("case sensitive routing", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    key: "sid",
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24000 * 60 * 60,
    },
  })
);
app.use("/", (req, res) => {
  var sess = req.session;
  console.log(sess.name);
  res.send(sess.name);
});
app.use("/user", userRouter);
app.use("/pet", petRouter);

app.listen(port, () => {
  console.log(`express Server Open Port :  ${port}`);
});
