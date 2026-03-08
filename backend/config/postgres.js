import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sql_assignments",
  password: "",
  port: 5432
});

export default pool;