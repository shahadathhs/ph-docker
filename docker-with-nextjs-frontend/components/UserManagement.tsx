/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useActionState, useEffect, useState } from 'react';
import { createUser } from '../actions';
import AddUserModal from './AddUserModal';
import Table from './Table';

const UserManagement = () => {
  const initialState = { message: '' };

  const [users, setUsers] = useState<any[]>([]); // state for user data
  const [isLoading, setIsLoading] = useState(true); // optional: loading state
  const [error, setError] = useState<string | null>(null); // optional: error state

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, formAction] = useActionState(createUser, initialState);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const body = await res.json();
      console.log(body);
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
    <div className="flex flex-col h-screen w-screen bg-black">
      <h1 className="text-4xl font-extrabold text-center text-white mt-6">
        User Management Page
      </h1>

      <div className="flex-grow flex justify-center items-center">
        <div className="card">
          <button
            onClick={handleOpenAddUserModal}
            className="bg-green-500 text-white py-2 px-4 rounded mb-4"
          >
            Add User
          </button>

          <p aria-live="polite" className="text-orange-500">
            {state?.message}
          </p>

          {isLoading ? (
            <p className="text-white">Loading users...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <table className="min-w-full text-white">
              <thead>
                <tr className="bg-blue-900 text-white shadow-md">
                  <th className="py-4 px-6 text-left text-lg">Profile Photo</th>
                  <th className="py-4 px-6 text-left text-lg">Email</th>
                  <th className="py-4 px-6 text-left text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => (
                  <Table key={user._id} user={user} />
                ))}
              </tbody>
            </table>
          )}

          <span className="top" />
          <span className="bottom" />
          <span className="right" />
          <span className="left" />
        </div>
      </div>

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
