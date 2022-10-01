import "./style.css";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

export const Cards = ({ todo, deleteTask, setEditData }) => {
  const { title, description, id } = todo;
  return (
    <Card className="card-wrapper" style={{ width: "18rem" }}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <div className="button-wrapper">
          <Button className="delete-button" onClick={() => deleteTask(id)}>
            Delete
          </Button>
          <Button className="edit-button" onClick={() => setEditData(todo)}>
            Edit
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
