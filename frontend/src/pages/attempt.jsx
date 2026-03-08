import { useState } from "react";
import axios from "axios";
import Result from "../components/Result";
import Hintpanel from "../components/Hintpanel";
import STables from "../components/Sample";
import SQLEditor from "../components/Sqledit";

const Attempt = () => {

  const [query, setQuery] = useState("SELECT * FROM employees;");
  const [results, setResults] = useState([]);
  const [hint, setHint] = useState("");
  const getHint = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/hint",
      {
        assignment: "find employees with salary > 50000",
        query: query
      }
    );
    setHint(res.data.hint);
  };

  const runQuery = async () => {
    try {

      const res = await axios.post(
        "http://localhost:5000/api/query",
        { query }
      );

      setResults(res.data.rows);

    } catch (error) {

      alert(error.response.data.error);

    }
  };

  return (
  
    <div className="assignment-page">

      <h2>Find employees with salary greater than 50000</h2>

      <div className="assignment-page__top">

        <div>
          <h3>Question</h3>
          <p>Write a SQL query to find employees with salary greater thean 50000</p>
        </div>

        <STables />

      </div>

      <div className="assignment-page__editor">
        <SQLEditor query={query} setQuery={setQuery} />
      </div>

      <div className="assignment-page__buttons">
        <button onClick={runQuery}>Run Query</button>
        <button onClick={getHint}>Get Hint</button>
      </div>

      <div className="assignment-page__results">
        <Result results={results} />
      </div>

      <Hintpanel hint={hint} />

    </div>
  );

  
};

export default Attempt;
