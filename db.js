
const mysql = require("mysql2")
const db = mysql.createConnection({
	host: "multitier-db.ch6682gckdyf.ap-south-1.rds.amazonaws.com",
	user: "admin",
	password: process.env.DB_PASSWORD,
	database: "studentdb",
	port: 3306
});

db.connect((err) => {
	if (err) {
	console.error("database connection failed:", err.message);
	return;
}
	console.log("connected to RDS MYSQL successfully");
});
module.exports = db;
