import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      Service Order Confirmed! <br />
      <button onClick={()=>navigate(-1)}>Go Back to Contact</button>
    </div>
  )
}

export default Services