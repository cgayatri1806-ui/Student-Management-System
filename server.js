const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "student management backend is running"
    });
});

app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "database query failed"
            });
        }

        res.json(results);
    });
});

app.post("/students", (req, res) => {
    const { name, email, phone, course } = req.body;

    const sql = `
        INSERT INTO students (name, email, phone, course)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, phone, course], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "failed to add student"
            });
        }

        res.status(201).json({
            message: "student added successfully",
            studentId: result.insertId
        });
    });
});

app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, phone, course } = req.body;

    const sql = `
        UPDATE students
        SET name = ?, email = ?, phone = ?, course = ?
        WHERE id = ?
    `;

    db.query(sql, [name, email, phone, course, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "failed to update student"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: "student not found"
            });
        }

        res.json({
            message: "student updated successfully"
        });
    });
});

const port = 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`server running on port ${port}`);
});app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM students WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    error: "failed to delete student"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    error: "student not found"
                });
            }

            res.json({
                message: "student deleted successfully"
            });
        }
    );
});
