"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const handleSignOut = async () => {
    logout();
  };

  return (
    <span onClick={handleSignOut} className=" cursor-pointer">
      {children}
    </span>
  );
};
