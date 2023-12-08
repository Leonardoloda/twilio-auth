"use server";

import { PrismaClient, User } from "@prisma/client";
import { PageTitle } from "../components/PageTitle";

const client = new PrismaClient();

const getUsers = async (): Promise<Array<User>> => {
  const users = await client.user.findMany({});

  return users;
};

export default async function Page() {
  const users = await getUsers();

  return (
    <section className="flex flex-col w-full items-center p-4 text-indigo-950">
      <PageTitle>Users</PageTitle>
      <table className="text-center w-full mt-4">
        <thead className="border-2 border-blue-950 bg-indigo-50">
          <tr>
            <th>name</th>
            <th>phoneNumber</th>
            <th>email</th>
            <th>password</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody className="border-2 border-blue-950">
          {users.map((user) => (
            <tr key={user.email} className="border-y-blue-800">
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.verified ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
