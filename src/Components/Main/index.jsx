import "./style.css";

import { TodoSection } from "../TodoSection";
import { TaskForm } from "../TaskForm";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../../consts";
import { Button } from "reactstrap";

export const Main = () => {
  const [todoData, setTodoData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [selectedTask,setSelectedTask]=useState([]);

  const toggleSelectedTask=(taskId)=>{
    if(selectedTask.includes(taskId)){
        setSelectedTask(prev=>prev.filter(selectedTaskID=>selectedTaskID!==taskId))
    }else(setSelectedTask(prev=>[...prev,taskId]))
  }

 

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
  
  
  const handleDeleteBatchTask=()=>{
    fetch(`${BACKEND_URL}/task/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({tasks:selectedTask}),
      })
        .then((res) => res.json())
        .then((data) => {
          setTodoData((prev) =>
            prev.filter(task => 
             !selectedTask.includes(task._id)))
               setSelectedTask([])
            })
          
        
    
  }
    
  
  useEffect(() => {
    fetch(`${BACKEND_URL}/task`)
      .then((res) => res.json())
      .then((data) => {
        setTodoData(data);
      });
  },[]);

  return (
    <main className="main-div">
       
      <div className="poject-forms">
      {!!selectedTask.length && <Button color="secondary"className="deleteAllButton"
        onClick={handleDeleteBatchTask}>Delete All </Button>}
        <TaskForm onSubmit={onAddTask} />
        {!!editData && <TaskForm onSubmit={onEdit} editData={editData} />}
      </div>
      <TodoSection
        todoData={todoData}
        deleteTask={deleteTask}
        setEditData={setEditData}
        toggleSelectedTask={toggleSelectedTask}
        selectedTask={selectedTask}
       

      />
    </main>
  );
};
