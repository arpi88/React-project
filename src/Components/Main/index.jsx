import "./style.css";

import { TodoSection } from "../TodoSection";
import { TaskForm } from "../TaskForm";
import { useState } from "react";
import { useEffect } from "react";
export const Main = () => {
  const [todoData, setTodoData] = useState([]);
  const [editData, setEditData] = useState(null);
  useEffect(() => {
    fetch(${BACKEND_URL})
      .then((res) => res.jason())
      .then((data) => {
        setTodoData(data);
      });
  });
  const onAddTask = (formData) => {
    const { title, description } = formData;

    const newTask = {
      id: Math.random(),
      title,
      description,
    };

    setTodoData((prev) => {
      return [...prev, newTask];
    });
  };

  const deleteTask = (id) => {
    setTodoData((prev) => prev.filter((task) => task.id !== id));
  };
  const onEdit = (editedData) => {
    setTodoData((prev) => {
      return prev.map((item) => {
        if (item.id === editedData.id) {
          return editedData;
        }

        return item;
      });
    });

    setEditData(null);
  };

  return (
    <main className="main-div">
      <div className="poject-forms">
        <TaskForm onSubmit={onAddTask} />
        {!!editData && <TaskForm onSubmit={onEdit} editData={editData} />}
      </div>
      <TodoSection
        todoData={todoData}
        deleteTask={deleteTask}
        setEditData={setEditData}
      />
    </main>
  );
};
