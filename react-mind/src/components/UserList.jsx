import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const users = [
    { _id: 1, name: "Jhon", address: "kathmandu" },
    { _id: 2, name: "Ramesh", address: "pokhara" },
    { _id: 3, name: "Ram", address: "Bhaktapur" },
    { _id: 4, name: "Sanjaya", address: "lalitpur" },
  ];
  const handleUser = (user_Id, userName) => {
    navigate(`/${user_Id}/${userName}`);
  };
  return (
    <div className=" container mt-5">
      <h4>User List</h4>
      <ul className="user-list">
        {users.map((user) => {
          return (
            <li onClick={() => handleUser(user._id, user.name)} key={user._id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
