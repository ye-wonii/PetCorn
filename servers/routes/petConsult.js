const express = require("express");
const consultRouter = express.Router({
  caseSensitive: false,
});
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "tlsdltkr44",
  database: "dogcorn",
});
const getFormatDate = (date) => {
  var year = date.getFullYear();
  var month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  var day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return year + "-" + month + "-" + day;
};

consultRouter.get("/", (req, res) => {
  const GET_QUES = `select boarditemid as "id", title, date_format(upload_date, '%Y-%m-%d') as "date", is_answer from qnaboard where userid ="${req.session.email}";`;
  conn.query(GET_QUES, (err, rows, field) => {
    if (err) throw err;
    res.send(rows);
  });
});

consultRouter.post("/enroll", (req, res) => {
  const { title, article } = req.body;
  console.log(title, article);
  const today = getFormatDate(new Date());
  const INSERT_QUES =
    "insert into qnaboard(userid, title, maintext, is_answer, upload_date)";
  const PARAMS = ` values('${req.session.email}', '${title}', '${article}', 0,'${today}');`;
  conn.query(INSERT_QUES + PARAMS, (err, rows, field) => {
    if (err) throw err;
    res.status(200).send({ success: "등록되었습니다!" });
  });
});

consultRouter.get("/question", (req, res) => {
  const GET_QUESTION = `select 
  boarditemid as "id", 
  user.name as "name",
  title,
  maintext, 
  date_format(upload_date, '%Y-%m-%d') as "date", 
  is_answer 
  from user, qnaboard
  where user.userid = qnaboard.userid;`;
  conn.query(GET_QUESTION, (err, rows, field) => {
    if (err) throw err;
    res.status(200).send(rows);
  });
});

consultRouter.get("/answer", (req, res) => {
  const id = req.query.id;
  const GET_ANSWER = `select text from answer where boarditemid = ${id};`;
  conn.query(GET_ANSWER, (err, rows, field) => {
    if (err) throw err;
    console.log(rows);
    res.status(200).send(rows[0].text);
  });
});

consultRouter.post("/answer", (req, res) => {
  const { id, input } = req.body;
  console.log(input);
  const ADD_ANSWER = `insert into answer(userid, boarditemid, text, date) values('${
    req.session.email
  }', ${id}, '${input}', '${getFormatDate(new Date())}')`;
  const UPDATE_IS_ANSWER = `update qnaboard set is_answer = 1 where boarditemid = ${id};`;
  conn.query(ADD_ANSWER, (err, rows, field) => {
    if (err) throw err;
    console.log("성공");
    conn.query(UPDATE_IS_ANSWER, (err, rows, field) => {
      if (err) throw err;
    });
    res.status(200).send(rows);
  });
});

consultRouter.get("/detailInfo", (req, res) => {
  const id = req.query.id;
  const DETAIL_INFO_GET_QUERY = `select 
  boarditemid as "id", 
  user.name as "name",
  title,
  maintext, 
  date_format(upload_date, '%Y-%m-%d') as "date", 
  is_answer 
  from user, qnaboard
  where user.userid = qnaboard.userid and qnaboard.boarditemid ='${id}';`;
  conn.query(DETAIL_INFO_GET_QUERY, (err, rows, field) => {
    if (err) throw err;
    res.status(200).send(rows[0]);
  });
});

consultRouter.get("/detailAnswer", (req, res) => {
  const id = req.query.id;
  const DETAIL_ANSWER_GET_QUERY = `select answer.answerid as "id", user.name, text as "answer", date_format(date, '%Y-%m-%d') as "date" from user, answer where user.userid = answer.userid and boarditemid = ${id}; `;
  conn.query(DETAIL_ANSWER_GET_QUERY, (err, rows, field) => {
    if (err) throw err;
    console.log(rows);
    res.status(200).send(rows);
  });
});
module.exports = consultRouter;
