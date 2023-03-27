"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "@/redux/user";

useState;

export function Counter() {
  const value = useSelector((store) => store.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count : {value}</p>
      <button onClick={() => dispatch(Increment())}> Increment</button>
    </div>
  );
}
