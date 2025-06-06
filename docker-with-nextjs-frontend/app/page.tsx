import UserManagement from "@/components/UserManagement";

export default async function Home() {
  const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    next: {
      tags: ["users"],
    },
  });
  const { data } = await users.json();

  return <UserManagement users={data} />;
}
