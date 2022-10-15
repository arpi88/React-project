import "./style.css";
import { Card } from "../Card";

export const TodoSection = ({ todoData, deleteTask, setEditData }) => {
  return (
    <div className="main-div">
      {todoData.map((todo) => {
        return (
          <Card
            todo={todo}
            key={todo._id}
            deleteTask={deleteTask}
            setEditData={setEditData}
          />
        );
      })}
    </div>
  );
};
