import { FC, FormEvent } from "react";

export interface LoginProps {}

const Login: FC<LoginProps> = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.info("FormData", formData);
    await fetch("/api/login", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-8">
      <label htmlFor="user">User:</label>
      <input
        className="bg-black text-white border-b-white border-b-2"
        type="text"
        name="user"
        id="user"
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        className="bg-black text-white border-b-white border-b-2"
        type="password"
        name="password"
        id="password"
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
