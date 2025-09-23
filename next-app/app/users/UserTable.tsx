import React from "react";
import sort from 'fast-sort';
import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  sortOrder?: string;
}

const UserTable = async ({sortOrder}:Props) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
    // { cache: "no-store",
    // next: {revalidate: 10}}
  );
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc(sortOrder == "email" ? (user:User) => user.email : (user:User) => user.name);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th><Link href="/users?sortOrder=name">Name</Link></th>
            <th><Link href="/users?sortOrder=email">Email</Link></th>
          </tr>
        </thead>
        <tbody>
           {sortedUsers.map((user: User) => (
            <tr key={user.id}>
              <td>
                {user.name} ({user.username})
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
