import "./style.css";

import { TodoSection } from "../TodoSection";
import { TaskForm } from "../TaskForm";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../../consts";
import { Button } from "reactstrap";

export const Main = () => {
  const [todoData, setTodoData] = useState([]);
  const [editableTaskData, setEditableTaskData] = useState(null);
  const [selectedTask, setSelectedTask] = useState([]);

  const toggleSelectTask = (taskId) => {
    if (selectedTask.includes(taskId)) {
      setSelectedTask((prev) =>
        prev.filter((selectedTaskId) => selectedTaskId !== taskId)
      );
    } else setSelectedTask((prev) => [...prev, taskId]);
  };

  const onAddTask = (formData) => {
    fetch(`${BACKEND_URL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoData((prev) => {
          return [...prev, data];
        });
      });
  };

  const onStatusChange = (_id, carrentStatus) => {
    const status = carrentStatus === "active" ? "done" : "active";
    fetch(`${BACKEND_URL}/task/${_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ status }),
    }).then(() => {
      setTodoData((prev) =>
        prev.map((task) => {
          if (task._id === _id) {
            return { ...task, status };
          }

          return task;
        })
      );
    });
  };
  const deleteTask = (_id) => {
    fetch(`${BACKEND_URL}/task/${_id}`, {
      method: "DELETE",
    }).then((data) => {
      setTodoData((prev) => prev.filter((task) => task._id !== _id));
    });
  };

  const onEditDone = (_id, editedTaskData) => {
    fetch(`${BACKEND_URL}/task/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedTaskData),
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

    setEditableTaskData(null);
  };
  const handleDeleteTasks = () => {
    fetch(`${BACKEND_URL}/task/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tasks: selectedTask }),
    })
      .then((res) => res.json())
      .then(() => {
        setTodoData((prev) =>
          prev.filter((task) => !selectedTask.includes(task._id))
        );
        setSelectedTask([]);
      });
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/task`)
      .then((res) => res.json())
      .then((data) => {
        setTodoData(data);
      });
  }, []);

  return (
    <main className="main-div">
      {selectedTask.length ? (
        <Button onClick={handleDeleteTasks}>Delete All</Button>
      ) : null}
      <div className="poject-forms">
        <TaskForm onSubmit={onAddTask} />
        {editableTaskData && (
          <TaskForm onSubmit={onEditDone} editableTaskData={editableTaskData} />
        )}
      </div>
      <TodoSection
        todoData={todoData}
        deleteTask={deleteTask}
        setEditableTaskData={setEditableTaskData}
        toggleSelectTask={toggleSelectTask}
        selectedTask={selectedTask}
        onStatusChange={onStatusChange}
      />
    </main>
  );
};
