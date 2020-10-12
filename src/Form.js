import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function Formm() {
  return (
    <Form>
      <Form.Group controlId="taskName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control required type="text" placeholder="I want to ..." />
      </Form.Group>
      <Form.Group controlId="taskDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" as="textarea" rows="3" />
      </Form.Group>
      <Form.Group controlId="taskAssign">
        <Form.Label>Assign To</Form.Label>
        <Form.Control required type="text" />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="taskDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control required type="date" />
        </Form.Group>
        <Form.Group as={Col} controlId="taskStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control required as="select">
            <option>To Do</option>
            <option>In Progress</option>
            <option>Review</option>
            <option>Done</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
