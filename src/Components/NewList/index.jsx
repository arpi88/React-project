import "./style.css";
export const NewList = ({ textData }) => {
  return (
    <div className="list">
      {textData.map((text, index) => {
        return (
          <p className="list-item" key={index}>
            {text}
            <button className="list-btn">Delete</button>
          </p>
        );
      })}
    </div>
  );
};
