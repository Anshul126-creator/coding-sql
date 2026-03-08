const STables = () => {

  const tables = [
    {
      name: "employees",
      columns: ["id", "name", "salary", "department"]
    }
  ];

  return (
    <div>
      <h3>Tables</h3>

      {tables.map(table => (
        <div key={table.name}>
          <strong>{table.name}</strong>

          <ul>
            {table.columns.map(col => (
              <li key={col}>{col}</li>
            ))}
          </ul>

        </div>
      ))}

    </div>
  );
};

export default STables;