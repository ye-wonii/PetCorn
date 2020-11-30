const mysql = require("mysql");

module.exports = () => {
  const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "tlsdltkr44",
    database: "dogcorn",
  });
  return {
    connect: () => {
      conn.connect();
    },
    end: () => {
      conn.end();
    },
  };
};
