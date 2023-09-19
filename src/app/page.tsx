import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <UserCard user={session.user} pagetype="Home" />
      ) : (
        <h1>Not Signed In</h1>
      )}
    </>
  );
}
