const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "panjiggm",
  password: "Panji2310",
  database: "todo_app"
});

// simple query
connection.query("SELECT * FROM todos", (err, results, fields) => {
  console.log(err);
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
