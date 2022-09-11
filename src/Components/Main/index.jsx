import "./style.css";

import { TodoSection } from "../TodoSection";
import { AddNewTask } from "../AddNewTask";
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
  const onAddTask = (formData) => {
    const { title, description } = formData;
    console.log(formData);

    const newTask = {
      id: Math.random(),
      title,
      description,
    };
    const setTodoData=() => {
      return [...prev, newTask];
    };
  };

const deleteData= (id){

}
}
  

  return (
    <main className="main-div">
      <AddNewTask onSubmit={onAddTask} />
      <TodoSection todoData={todoData} />
    </main>
  );
};
