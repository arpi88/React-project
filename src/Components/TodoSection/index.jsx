import "./style.css";
import { Cards } from "../Cards";

export const TodoSection = ({ todoData, deleteTask, setEditData }) => {
  return (
    <div className="main-div">
      {todoData.map((todo) => {
        return (
          <Cards
            todo={todo}
            key={todo.id}
            deleteTask={deleteTask}
            setEditData={setEditData}
          />
        );
      })}
    </div>
  );
};
