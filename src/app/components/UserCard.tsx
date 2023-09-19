import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};
export default function UserCard({ user, pagetype }: Props) {
  const greeting = user?.name ? (
    <div className="flex flex-col items-center">Hello {user?.name}</div>
  ) : null;

  const userImage = user?.image ? (
    <Image
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "User Image"}
      priority={true}
    />
  ) : null;
  return (
    <session className="flex flex-col items-center">
      {greeting}
      {userImage}
      <p className="text-2xl text-center">{pagetype} Page!</p>
    </session>
  );
}
