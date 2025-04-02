import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { user_Id, userName } = params;
  return (
    <div className="container mt-5">
      <h4>User profile</h4>
      <ul>
        <li>user id : {user_Id}</li>
        <li>user name: {userName}</li>
        {/* <li>user address: {userAddress}</li> */}
      </ul>
    </div>
  );
};

export default User;
