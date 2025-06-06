import React from "react";
import { useFormStatus } from "react-dom";

const ActionSubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
      type="submit"
      disabled={pending}
    >
      {pending ? "loading.." : children}
    </button>
  );
};

export default ActionSubmitButton;
