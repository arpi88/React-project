import "./style.css";
export const NewList = ({ textData }) => {
  const handleChange = (e) => {
    e.input.value = "";
  };
  return (
    <div className="list">
      {textData.map((text, index) => {
        return (
          <p className="list-item" key={index}>
            {text}
            <button className="list-btn" onClick={handleChange}>
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};
