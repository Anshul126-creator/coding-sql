import "dotenv/config";
import express from "express";
import cors from "cors";
import query from "./routes/query.js";
import assignment from "./routes/assignment.js";
import hint from "./routes/hint.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/hint", hint);
app.use("/api/assignments", assignment);
app.use("/api/query", query);
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
