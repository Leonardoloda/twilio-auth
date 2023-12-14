"use client";

import { FC } from "react";
import { createUser } from "../actions/createUser";
import { useFormState } from "react-dom";
import { SubmitButton } from "../components/SubmitButton";
import { FormInput } from "../components/FormInput";

export interface RegisterProps {}

const initialState = {
  message: "",
};

const Register: FC<RegisterProps> = () => {
  const [state, formCreateUser] = useFormState(createUser, initialState);

  return (
    <form
      action={formCreateUser}
      className="flex flex-col gap-4 p-8 w-screen h-screen justify-center items-center"
    >
      <FormInput label="Name" name="name" placeholder="John Smith" required />

      <FormInput
        label="Email"
        name="email"
        placeholder="mail@mail.com"
        required
      />

      <FormInput label="Phone" name="phone" placeholder="+57 000 000 0000" />

      <FormInput
        label="Password"
        name="password"
        placeholder="password"
        type="password"
        required
      />

      <div className="flex flex-row items-center justify-start gap-4 w-full">
        <input type="checkbox" name="enable2fa" id="enable2fa" />
        <label htmlFor="enable2fa">I want to enable 2FA</label>
      </div>

      <p className="w-full text-start italic text-cyan-900 underline">
        By entering a number, you agree to our terms and conditions.
      </p>

      {state.message && (
        <p className="text-red-700 text-center font-bold">{state.message}</p>
      )}

      <SubmitButton>Register</SubmitButton>
    </form>
  );
};

export default Register;
