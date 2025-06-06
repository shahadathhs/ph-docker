import UserManagement from "@/components/UserManagement";

export default async function Home() {
  const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    next: {
      tags: ["users"],
    },
  });
  const { data } = await users.json();

  // eslint-disable-next-line react/react-in-jsx-scope
  return <UserManagement users={data} />;
}
