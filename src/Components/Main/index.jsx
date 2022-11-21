import "./style.css";

import { TodoSection } from "../TodoSection";
import { TaskForm } from "../TaskForm";
import { useState } from "react";

const data = [
  /*{
    id: 2,
    title: "Arizona",
    description:
      "Arizona is a landlocked state situated in the southwestern United States, bordering Mexico in the south. The Grand Canyon State (its nickname) borders Utah to the north, New Mexico to the east, the Mexican states of Sonora and Baja California to the south, California in the west, and Nevada in northwest.",
  },*/
];

export const Main = () => {
  const [todoData, setTodoData] = useState(data);
  const [editData, setEditData] = useState(null);

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
