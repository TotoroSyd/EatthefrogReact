import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
// import HelpBlock from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { format, formatDistance } from "date-fns";
import { v4 as uuid } from "uuid";

import { TaskContext } from "../contexts/TaskContext";
import { ModalContext } from "../contexts/ModalContext";

export default function Formm({ handleClose }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const { tasks, setTasks } = useContext(TaskContext);

  // console.log(editName, editDescription, editOwner, editDate, editStatus);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    // SOLUTION 1 TO GET INPUT VALUES USING STATE
    // console.log(formData);
    // dataToParent(formData);
    setTasks([...tasks, { ...formData, id: uuid() }]);

    // SOLUTION 2 TO GET INPUT VALUES
    // const form = event.target;
    // // FormData object will be populated with the form's current [key, value] using the name property of each element for the keys
    // // and their submitted value for the values
    // const formdata = new FormData(form);
    // // Convert [key, value] pairs into an object
    // const dataObj = Object.fromEntries(formdata.entries());
    // // console.log(dataObj);
  };

  const handleChange = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    // validate
    const valid = checkValidity(nam, val);
    if (valid === true) {
      if (nam === "taskdate") {
        // val is a string ('2020-10-26') so we need to parse it (19090980980..) for format() method in Tasklistboard.js to run
        val = Date.parse(val);
      }
      setFormData({ ...formData, [nam]: val });
    }
  };

  function checkValidity(nam, val) {
    if (nam === "taskname") {
      if (val === "") {
        setError({ ...error, [nam]: "What is the task?" });
        return false;
      } else {
        setError({ ...error, [nam]: null });
        return true;
      }
    } else if (nam === "taskdescription") {
      if (val === "") {
        setError({ ...error, [nam]: "Some note, maybe" });
        return false;
      } else {
        setError({ ...error, [nam]: null });
        return true;
      }
    } else if (nam === "taskassign") {
      if (val === "") {
        setError({
          ...error,
          [nam]: "Oh oh! Who is going to complete this task?",
        });
        return false;
      } else {
        setError({ ...error, [nam]: null });
        return true;
      }
    } else if (nam === "taskdate") {
      if (val === "") {
        setError({ ...error, [nam]: "When should this task complete?" });
        return false;
      } else {
        setError({ ...error, [nam]: null });
        return true;
      }
    } else if (nam === "taskstatus") {
      if (val !== "") {
        setError({ ...error, [nam]: null });
        return true;
      }
    }
  }

  return (
    //   noValidate - disable the default validation UI by Browsers
    <Form autoComplete="off" noValidate role="form" onSubmit={handleSubmit}>
      <Form.Group controlId="taskName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="text"
          placeholder="I want to ..."
          name="taskname"
        />
      </Form.Group>
      <Form.Group controlId="taskDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="text"
          as="textarea"
          rows="3"
          name="taskdescription"
        />
      </Form.Group>
      <Form.Group controlId="taskAssign">
        <Form.Label>Assign To</Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="text"
          name="taskassign"
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="taskDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            required
            type="date"
            name="taskdate"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="taskstatus">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" name="taskstatus" onChange={handleChange}>
            <option defaultValue="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
            <option value="Done">Done</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Button
        variant="primary"
        type="submit"
        // Disable Save button when there is still an error in form
        // disabled={disabled ? "disabled" : null}
      >
        Save
      </Button>
    </Form>
  );
}
