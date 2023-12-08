import { SessionProvider } from "next-auth/react";
import { getSession } from "../actions/getSession";

export default async function SessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
