import { FC, FormEvent } from "react";

export interface VerifyProps {}

const Verify: FC<VerifyProps> = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await fetch("/api/verify", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-8">
      <label htmlFor="code">Code</label>
      <input type="number" name="code" id="code" />

      <button type="submit">Verify</button>
    </form>
  );
};

export default Verify;
