import React from "react";
import { User } from "../components/User";
import { useSelector } from "react-redux";
import Welcome from "../commons/Welcome";

export default function Home() {
  const user = useSelector((state) => state.user);
  return <>{user.id ? <User /> : <Welcome />}</>;
}
