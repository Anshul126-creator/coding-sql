import express from "express";
import pool from "../config/postgres.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { query } = req.body;

  const forbidden = ["drop", "delete", "update", "insert", "alter"];

for (let word of forbidden) {
  if (query.toLowerCase().includes(word)) {
    return res.status(400).json({
      error: "Query not allowed"
    });
  }
}

  try {

    // Security: allow only SELECT queries
    if (!query.toLowerCase().trim().startsWith("select")) {
      return res.status(400).json({
        error: "Only SELECT queries are allowed"
      });
    }

    const result = await pool.query(query);

    res.json({
      rows: result.rows
    });

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

export default router;