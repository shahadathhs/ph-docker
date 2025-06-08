import UserManagement from '@/components/UserManagement';

export default function Home() {
  console.log('DOCKER API URL:', process.env.NEXT_PUBLIC_API_URL_DOCKER);
  console.log('LOCALHOST API URL', process.env.NEXT_PUBLIC_API_URL_LOCAL);
  return <UserManagement />;
}
