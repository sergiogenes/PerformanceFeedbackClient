"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = useSelector((store) => store.user);
  const router = useRouter();

  user.id ? router.push("/me") : router.push("/login");
  return (
    <>
      <h1>Loading</h1>
    </>
  );
}
