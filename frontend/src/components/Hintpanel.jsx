const HintPanel = ({ hint }) => {

  if (!hint) return null;

  return (
    <div>
      <h4>Hint</h4>
      <p>{hint}</p>
    </div>
  );
};

export default HintPanel;