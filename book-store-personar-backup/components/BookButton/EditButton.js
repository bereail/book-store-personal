import React from "react";
import { Button } from "react-bootstrap";


const EdditButton = ({ onEdit }) => {
  return (
    <Button onClick={onEdit}>
      Edit
    </Button>
  )
}

export default EdditButton;