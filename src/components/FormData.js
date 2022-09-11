import React from "react";

const FormData = ({users}) => {
  return (
    <div className="form-data">
      <h2>your Form Data</h2>
      <ul>
      {users.map((user,i)=>(
          <li>
          <h3>First Name: {user.fname}</h3>
          <h3>Last Name: {user.lname}</h3>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <p>Confirm Password: {user.cPassword}</p>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default FormData;
