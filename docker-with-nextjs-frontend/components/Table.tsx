'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
  profilePhoto: string;
}

interface TableBodyProps {
  user: User;
}

const Table: React.FC<TableBodyProps> = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="transition duration-200 border-t">
        <td className="py-4 px-6">
          <img
            src={user.profilePhoto}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-white"
          />
        </td>
        <td className="py-4 px-6">{user.email}</td>
        <td className="py-4 px-6">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="default" size="sm">
                View Info
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900">
              <DialogHeader>
                <DialogTitle>User Info</DialogTitle>
                <DialogDescription>
                  Details about{' '}
                  <span className="font-semibold">{user.name}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center gap-4 mt-4">
                <img
                  src={user.profilePhoto}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-white"
                />
                <div>
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-gray-400">{user.email}</p>
                </div>
              </div>

              <DialogClose asChild>
                <Button className="mt-6" variant="outline">
                  Close
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </td>
      </tr>
    </>
  );
};

export default Table;
