import React from 'react'
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
      This is Contact Page <br />
      <button onClick={() => navigate("/services")}>
        Place Services Order
      </button>
    </div>
  );
}

export default Contact