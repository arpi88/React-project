import "./style.css";
import { Card } from "../Card";

export const TodoSection = ({ todoData, deleteTask, setEditData,toggleSelectedTask,selectedTask }) => {
  return (
    <div className="main-div">
      {todoData.map((todo) => {
        return (
          <Card
            todo={todo}
            key={todo._id}
            deleteTask={deleteTask}
            setEditData={setEditData}
            toggleSelectedTask={toggleSelectedTask}
            isSelectedTask={selectedTask.includes(todo._id)}
           
          />
        );
      })}
    </div>
  );
};
