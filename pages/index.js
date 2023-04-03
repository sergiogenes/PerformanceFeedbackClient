import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Home() {
  const user = useSelector((store) => store.user);
  const router = useRouter();

  useEffect(() => {
    user.id ? router.push("/me") : router.push("/login");
  }, []);

  return (
    <>
      <h1>Loading</h1>
    </>
  );
}
