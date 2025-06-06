'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { ReloadIcon } from '@radix-ui/react-icons'; 
import React from 'react';

const ActionSubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default ActionSubmitButton;
