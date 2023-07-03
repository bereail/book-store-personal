import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddAdminButton.css";

const AddAdminButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/addadmin"); // Aquí se realiza la navegación a la ruta "addadmin"
  };

  return (
    <div className="add-admin">
      <button onClick={handleButtonClick}>Add Admin</button>
    </div>
  );
};

export default AddAdminButton;