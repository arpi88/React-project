import "./style.css";

import { TodoSection } from "../TodoSection";
import { TaskForm } from "../TaskForm";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "California",
    description:
      "California the largest state of USA.The state's extremely diverse geography ranges from the Pacific Coast and metropolitan areas in the west to the Sierra Nevada mountains in the east, and from the redwood and Douglas fir forests in the northwest to the Mojave Desert in the southeast. ",
  },
  {
    id: 2,
    title: "Arizona",
    description:
      "Arizona is a landlocked state situated in the southwestern United States, bordering Mexico in the south. The Grand Canyon State (its nickname) borders Utah to the north, New Mexico to the east, the Mexican states of Sonora and Baja California to the south, California in the west, and Nevada in northwest.",
  },
];

export const Main = () => {
  const [todoData, setTodoData] = useState(data);
  const [editData, setEditData] = useState(null);
  const onAddTask = (formData) => {
    const { title, description } = formData;
    console.log(formData);

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
    console.log(id);
    setTodoData((prev) => prev.filter((task) => task.id !== id));
  };
  const onEdit = (editedData) => {
    console.log(editedData);
  };
  return (
    <main className="main-div">
      <div className="poject-forms">
        <TaskForm onSubmit={onAddTask} />
        {editData & <TaskForm onSubmit={onEdit} editData={editData} />}
      </div>
      <TodoSection
        todoData={todoData}
        deleteTask={deleteTask}
        setEditData={setEditData}
      />
    </main>
  );
};
