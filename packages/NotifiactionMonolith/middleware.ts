export { auth as default } from "./app/api/auth/[...nextAuth]/route";

export const config = {
  matcher: ["/home"],
};
