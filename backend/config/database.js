import mysql from "mysql2";

// create the connection to database

const db = mysql.createConnection({
  host: "shortline.proxy.rlwy.net",
  user: "root",
  password: "daxkHkZsCVJMFtCVDAheNtkBsFGSwiNg",
  database: "railway",
  port: 34884,
  multipleStatements: true,
});

db.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;
