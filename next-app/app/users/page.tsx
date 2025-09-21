import React from "react";
import UserTable from "./UserTable";



const UsersPage = () => {


  return (
    <>
      <h1>Users List</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />

    </>
  );
};

export default UsersPage;
