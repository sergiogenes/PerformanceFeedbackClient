import { Login } from "../../components/Login";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function login() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !user.id
      ? (document.body.style.background = "#1686F7")
      : (document.body.style.background = "#f9f9f9");
  }, [user]);
  return <Login />;
}

export default login;
