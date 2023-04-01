"use client";
import Dashboard from "./Dashboard";
import { Navigation } from "./Navigation";
import { useSelector } from "react-redux";
import { User } from "./User";

export function Me() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Navigation user={user} />
      {user.isAdmin ? <Dashboard /> : <User user={user} />}
    </>
  );
}
