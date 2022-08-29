import "./style.css";

export const NewList = ({ textData, setTextData }) => {
  const handleDelete = (index) => {
    setTextData(prev => prev.filter((text, idx) => idx !== index))
  };

  return (
    <div className="list">
      {textData.map((text, index) => {
        return (
          <p className="list-item" key={index}>
            {text}
            <button className="list-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};
