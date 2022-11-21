import "./style.css";
import {
  Card as LibCard,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

export const Card = ({ todo, deleteTask, setEditData }) => {
  const { title, description, id, date } = todo;
  const isDate = todo.date;
  return (
    <LibCard className="card-wrapper" style={{ width: "18rem" }}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        {isDate ? (
          <CardText>{`Due Date::${date.slice(0, 10)}`}</CardText>
        ) : null}

        <div className="button-wrapper">
          <Button className="delete-button" onClick={() => deleteTask(id)}>
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
