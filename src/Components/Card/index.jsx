import "./style.css";
import {
  Card as LibCard,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

export const Card = ({ todo, deleteTask, setEditData,toggleSelectedTask,isSelectedTask }) => {
  const { title, description, _id } = todo;
  return (
    <LibCard className="card-wrapper" style={{ width: "18rem" }} 
   >
    <div className="checkBox">
    <input className="" type="checkbox" onChange={()=>toggleSelectedTask(todo._id)}
    checked={isSelectedTask}></input>
    </div>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <div className="button-wrapper">
          <Button className="delete-button" onClick={() => deleteTask(_id)}>
            Delete
          </Button>
          <Button className="edit-button" onClick={() => setEditData(todo)}>
            Edit
          </Button>
         
        </div>
      </CardBody>
    </LibCard>
  );
};
