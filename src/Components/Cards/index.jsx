import "./style.css";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
export const Cards = ({}) => {
  return (
    <Card className="card-wrapper" style={{ width: "18rem" }}>
      <CardBody>
        <CardTitle tag="h5">California</CardTitle>
        <CardText>
          California, officially the State of California, is a state in the
          western part of the United States, along the Pacific Ocean. It is the
          third biggest US state by land area with 163,696 square mi (423,970
          km2)
        </CardText>
        <div className="button-wrapper">
          <Button className="delete-button">Delete</Button>
          <Button className="edit-button">Edit</Button>
        </div>
      </CardBody>
    </Card>
  );
};
