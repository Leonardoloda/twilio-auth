"use client";

import { FC, useState } from "react";
import { FormInput } from "../components/FormInput";
import { SubmitButton } from "../components/SubmitButton";
import { confirmUser } from "../actions/verifyUser";
import { useSession } from "next-auth/react";

const Verify: FC = () => {
  const [code, setCode] = useState("");
  const session = useSession();

  return (
    <form
      action={confirmUser}
      className="w-screen h-screen flex flex-col gap-4 p-8"
    >
      <FormInput
        label="Verification code"
        name="code"
        onChange={setCode}
        value={code}
        placeholder="000000"
      />
      <input
        type="hidden"
        value={session?.data?.user?.email || ""}
        name="email"
      />
      <SubmitButton>Verify</SubmitButton>
    </form>
  );
};

export default Verify;
