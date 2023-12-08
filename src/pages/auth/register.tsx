import { FC, FormEvent } from "react";

export interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await fetch("/api/register", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-8">
      <label htmlFor="firstName">First Name: </label>
      <input type="text" name="first name" id="firstName" />

      <label htmlFor="lastName">Last Name: </label>
      <input type="text" name="last name" id="lastName" />

      <label htmlFor="email">Email: </label>
      <input type="text" name="email" id="email" />

      <label htmlFor="phone">Phone number: </label>
      <input type="text" name="phone" id="phone" />

      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" />

      <label htmlFor="password">Password: </label>
      <input type="text" name="password" id="password" />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
