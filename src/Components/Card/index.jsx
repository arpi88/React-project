import "./style.css";
import {
  Card as LibCard,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

export const Card = ({
  todo,
  deleteTask,
  setEditableTaskData,
  toggleSelectTask,
  isSelected,
  onStatusChange,
}) => {
  const { title, description, _id, date, status } = todo;
  const isDate = todo.date;
  return (
    <LibCard className="card-wrapper" style={{ width: "18rem" }}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => toggleSelectTask(todo._id)}
        checked={isSelected}
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        {isDate ? (
          <CardText>{`Due Date::${date.slice(0, 10)}`}</CardText>
        ) : null}

        <div className="button-wrapper">
          <Button className="delete-button" onClick={() => deleteTask(_id)}>
            Delete
          </Button>
          <Button
            className="edit-button"
            onClick={() => setEditableTaskData(todo)}
          >
            Edit
          </Button>
          <Button onClick={() => onStatusChange(_id, status)}>
            {status === "active" ? "Done" : "Active"}
          </Button>
        </div>
      </CardBody>
    </LibCard>
  );
};
