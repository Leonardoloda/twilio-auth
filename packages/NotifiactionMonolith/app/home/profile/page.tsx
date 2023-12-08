"use client";

import { FC } from "react";

import { logout } from "../../actions/logout";
import { FormInput } from "../../components/FormInput";
import { SubmitButton } from "../../components/SubmitButton";
import { changePassword } from "../../actions/changePassword";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Profile: FC = () => {
  const session = useSession();

  if (!session.data) redirect("/login");

  const [result, formChangePassword] = useFormState(changePassword, "");

  const onClick = () => {
    logout();
  };

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <form action={formChangePassword} className="w-full p-8">
        <FormInput
          label="New password"
          name="password"
          placeholder="password"
          type="password"
          required
        />

        {result && <p className=" mt-8">{result}</p>}
        <SubmitButton>Change password</SubmitButton>
      </form>

      <button
        onClick={onClick}
        className="bg-red-700 border-2 rounded border-red-900 p-4 hover:bg-red-800 text-white"
      >
        Sign out
      </button>
    </main>
  );
};

export default Profile;
