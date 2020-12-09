const bodyParser = require("body-parser");
const express = require("express");
const userRouter = require("./routes/user");
const petRouter = require("./routes/petInfo");
const mysql = require("mysql");
const session = require("express-session");
const cors = require("cors");
const ConsultRouter = require("./routes/petConsult");
var MySQLStore = require("express-mysql-session")(session);

const app = express();
const port = process.env.PORT || 8080;
var options = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "tlsdltkr44",
  database: "dogcorn",
};

var sessionStore = new MySQLStore(options);
app.use(cors());
app.set("case sensitive routing", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "network",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);
app.post("/", (req, res) => {
  var sess;
  sess = req.session;
  console.log(sess);
  res.send(sess.name);
});
app.use("/user", userRouter);
app.use("/pet", petRouter);
app.use("/consult", ConsultRouter);

app.listen(port, () => {
  console.log(`express Server Open Port :  ${port}`);
});
