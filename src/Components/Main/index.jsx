import "./style.css";

import { TodoSection } from "../TodoSection";
import { TaskForm } from "../TaskForm";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../../consts";

export const Main = () => {
  const [todoData, setTodoData] = useState([]);
  const [editData, setEditData] = useState(null);

  const onAddTask = (formData) => {
    const { title, description } = formData;

    const newTask = {
      title,
      description,
    };
    fetch(`${BACKEND_URL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoData((prev) => {
          return [...prev, data];
        });
      });
  };

  const deleteTask = (_id) => {
    fetch(`${BACKEND_URL}/task/${_id}`, {
      method: "DELETE",
    }).then((data) => {
      setTodoData((prev) => prev.filter((task) => task._id !== _id));
    });
  };

  const onEdit = (_id, editData) => {
    fetch(`${BACKEND_URL}/task/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoData((prev) =>
          prev.map((task) => {
            if (task._id === _id) {
              return data;
            }

            return task;
          })
        );
      });
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/task`)
      .then((res) => res.jason())
      .then((data) => {
        setTodoData(data);
      });
  });

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
