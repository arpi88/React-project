import "./style.css";
import { Card } from "../Card";

export const TodoSection = ({
  todoData,
  deleteTask,
  setEditableTaskData,
  toggleSelectTask,
  selectedTask,
}) => {
 
  return (
    <div className="main-div">
      {todoData.map((todo) => {
        return (
          <Card
            todo={todo}
            key={todo._id}
            deleteTask={deleteTask}
            setEditableTaskData={setEditableTaskData}
            toggleSelectTask={() => toggleSelectTask(todo._id)}
            isSelected={selectedTask.includes(todo._id)}
          />
        );
      })}
    </div>
  );
};
