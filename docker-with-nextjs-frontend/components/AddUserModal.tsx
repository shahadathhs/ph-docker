'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import ActionSubmitButton from './ActionSubmitButton';

/* eslint-disable @typescript-eslint/no-explicit-any */
const AddUserModal = ({ isOpen, onClose, formAction }: any) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>

        <form action={formAction} id="addUserForm" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Profile Image</Label>
            <Input type="file" id="image" name="image" accept="image/*" />
          </div>

          <Separator />

          <div className="pt-2">
            <ActionSubmitButton>Add</ActionSubmitButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
