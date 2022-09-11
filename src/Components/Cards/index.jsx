import "./style.css";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

export const Cards = ({ todo: { title, description, id }, deleteData }) => {
  return (
    <Card className="card-wrapper" style={{ width: "18rem" }}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <div className="button-wrapper">
          <Button className="delete-button" onClick={deleteData(id)}>
            Delete
          </Button>
          <Button className="edit-button">Edit</Button>
        </div>
      </CardBody>
    </Card>
  );
};
