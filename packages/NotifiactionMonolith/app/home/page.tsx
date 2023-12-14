import { FC } from "react";
import { PageTitle } from "../components/PageTitle";
import Link from "next/link";
import { getSession } from "../actions/getSession";
import { getUser } from "../actions/getUser";
import { redirect } from "next/navigation";
import { startVerification } from "../actions/startVerification";

const HomePage: FC = async () => {
  const session = await getSession();
  const user = await getUser(session?.user?.email);

  if (!user) redirect("/login");
  if (!user.verified) {
    startVerification(session?.user)
    redirect("/verify");
  }

  return (
    <>
      <aside className="w-screen text-end pt-8 pr-8">
        <Link href="/home/profile">My Profile</Link>
      </aside>
      <main className="w-screen h-screen flex justify-center items-center flex-col">
        <PageTitle>Hi {session?.user?.email}</PageTitle>
      </main>
    </>
  );
};

export default HomePage;
