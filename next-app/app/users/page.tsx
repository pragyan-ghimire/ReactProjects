import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props{
  searchParams: { sortOrder: string }
}

const UsersPage = async({searchParams}: Props) => {

  const {sortOrder} = await searchParams;
  return (
    <>
      <h1>Users List</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href={`/users/new`} className="btn">New User</Link>
      <UserTable sortOrder={sortOrder}  />

    </>
  );
};

export default UsersPage;
