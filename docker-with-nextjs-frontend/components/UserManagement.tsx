/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useActionState, useEffect, useState } from 'react';
import { createUser } from '../actions';
import AddUserModal from './AddUserModal';
import Table from './Table';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const UserManagement = () => {
  const initialState = { message: '' };

  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, formAction] = useActionState(createUser, initialState);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const body = await res.json();
      setUsers(body?.data);
    } catch (err: any) {
      console.error('Error fetching users:', err);
      setError('Failed to fetch users');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    handleCloseModal();
    console.log(state);
  }, [state]);

  const handleOpenAddUserModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-start bg-background px-4 py-6">
      <h1 className="text-4xl font-bold text-foreground text-center mb-6">
        User Management Page
      </h1>

      <Card className="w-full max-w-5xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>User List</span>
            <Button onClick={handleOpenAddUserModal}>Add User</Button>
          </CardTitle>
        </CardHeader>

        <CardContent>
          {state?.message && (
            <Alert variant="default" className="mb-4">
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="animate-spin w-6 h-6 mr-2 text-muted-foreground" />
              <span>Loading users...</span>
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="">
                  <tr>
                    <th className="py-3 px-4">Profile Photo</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: any) => (
                    <Table key={user._id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <AddUserModal
        state={state}
        formAction={formAction}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default UserManagement;
