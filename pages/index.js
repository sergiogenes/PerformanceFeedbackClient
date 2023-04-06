import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { User } from "../components/User";
import { Login } from "@mui/icons-material";

export default function Home() {
  const user = useSelector((state) => state.user);
  console.log("user", user.id);
  return <>{user.id ? <Navbar Component={User} /> : <h1>Login</h1>}</>;
}
