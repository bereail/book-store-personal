import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = ({onDelete}) => {
  return (
    <Button onClick={onDelete}>
      Delete
    </Button>
  )
}

export default DeleteButton;