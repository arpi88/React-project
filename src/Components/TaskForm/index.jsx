import "./style.css";
import { useState } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
export const TaskForm = ({ onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    title: editData ? editData.title : "",
    description: editData ? editData.description : "",
  });
  const handleChange = (e) => {
    const { target } = e;
    console.log(e);
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Form
      className="input-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({
          title: " ",
          description: " ",
        });
      }}
    >
      <FormGroup className="form-group">
        <Label>Title</Label>
        <Input className="input" name={"title"} onChange={handleChange} />
        <FormText></FormText>
      </FormGroup>
      <FormGroup className="form-group">
        <Label>Description</Label>
        <Input className="input" name="description" onChange={handleChange} />
        <FormText></FormText>
      </FormGroup>
      <Button color="primary">{editData ? "Edit Task" : "Add New Task"}</Button>
    </Form>
  );
};
