import "./style.css";
import { Cards } from "../Cards";

export const TodoSection = ({ todoData }) => {
  return (
    <div className="main-div">
      {todoData.map((todo) => {
        return <Cards todo={todo} key={todo.id} />;
      })}
    </div>
  );
};
