import UserManagement from '@/components/UserManagement';

export default function Home() {
  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
  return <UserManagement />;
}
