import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { User } from "../components/User";
import { Login } from "@mui/icons-material";

export default function Home() {
  const router = useRouter();
  const user = useSelector((store) => store.user);

  // useEffect(() => {
  //   if (!user.id) return router.push("/login");
  // });

  return <>{user.id ? <Navbar Component={User} /> : "null"}</>;
}
