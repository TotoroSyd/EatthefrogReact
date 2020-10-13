import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function Formm({ handleClose }) {
  const handleChangeTaskName = "";
  const handleChangeTaskDescription = "";
  const handleChangeTaskAssign = "";
  const handleChangeTaskDate = "";
  const handleChangeTaskStatus = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("save is clicked");
    handleClose();
  };
  return (
    //   noValidate - disable the default UI by Browsers
    <Form autoComplete="off" noValidate role="form">
      <Form.Group controlId="taskName" onChange={handleChangeTaskName}>
        <Form.Label>Task Name</Form.Label>
        <Form.Control required type="text" placeholder="I want to ..." />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          What is the task?
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        controlId="taskDescription"
        onChange={handleChangeTaskDescription}
      >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" as="textarea" rows="3" />
      </Form.Group>
      <Form.Group controlId="taskAssign" onChange={handleChangeTaskAssign}>
        <Form.Label>Assign To</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Oh oh! Who is going to complete this task?
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Row>
        <Form.Group
          as={Col}
          controlId="taskDate"
          onChange={handleChangeTaskDate}
        >
          <Form.Label>Due Date</Form.Label>
          <Form.Control required type="date" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            When should this task complete?
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          controlId="taskStatus"
          onChange={handleChangeTaskStatus}
        >
          <Form.Label>Status</Form.Label>
          <Form.Control as="select">
            <option defaultValue="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" onSubmit={handleSubmit}>
        Save
      </Button>
    </Form>
  );
}
