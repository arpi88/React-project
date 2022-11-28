import "./style.css";
import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
export const TaskForm = ({ onSubmit, editableTaskData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (editableTaskData) {
      const { title, description } = editableTaskData;

      setFormData({
        title,
        description,
      });
    }
  }, [editableTaskData]);

  return (
    <Form
      className="input-form"
      onSubmit={(event) => {
        event.preventDefault();

        if (editableTaskData) {
          onSubmit(editableTaskData._id, formData);
        } else {
          onSubmit({ ...formData, date: startDate.toISOString().slice(0, 10) });
          setFormData({
            title: " ",
            description: " ",
          });
        }
      }}
    >
      <FormGroup className="form-group">
        <Label>Title</Label>
        <Input
          className="input"
          name={"title"}
          onChange={handleChange}
          value={formData.title}
        />
        <FormText></FormText>
      </FormGroup>
      <FormGroup className="form-group">
        <Label>Description</Label>
        <Input
          className="input"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <FormText></FormText>
      </FormGroup>
      <div className="datapicker-input">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <Button className=" add-new-task-button" color="primary">
        {editableTaskData ? "Edit Task" : "Add New Task"}{" "}
      </Button>
    </Form>
  );
};
