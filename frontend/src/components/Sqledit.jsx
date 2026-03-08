import Editor from "@monaco-editor/react";

const SQLEditor = ({ query, setQuery }) => {
  return (
    <Editor
      height="200px"
      defaultLanguage="sql"
      theme="vs-dark"
      value={query}
      onChange={(value) => setQuery(value)}
    />
  );
};

export default SQLEditor;