"use client";
import { FC, useState } from "react";

import { SubmitButton } from "../components/SubmitButton";
import { FormInput } from "../components/FormInput";
import { authenticate } from "../actions/authenticate";
import Link from "next/link";

export interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("leonardoloda2@gmail.com");
  const [password, setPassword] = useState<string>("password");

  return (
    <form
      action={authenticate}
      className="flex flex-col gap-4 p-8 h-screen justify-center mx-8"
    >
      <FormInput
        label="Email"
        name="email"
        placeholder="mail@example.com"
        value={username}
        onChange={setUsername}
      />

      <FormInput
        label="Password"
        name="password"
        placeholder="password"
        onChange={setPassword}
        value={password}
        type="password"
      />

      <Link
        href={{
          pathname: "/register",
        }}
        className="text-cyan-900 underline text-center italic"
      >
        Don&apos;t have an account, create one here
      </Link>

      <SubmitButton>Login</SubmitButton>
    </form>
  );
};

export default Login;
