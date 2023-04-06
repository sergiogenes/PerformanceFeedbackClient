import { createAction, createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const logIn = createAction("LOG_IN");
export const logOut = createAction("LOG_OUT");

const token = Cookies.get("token");
const user = token ? jwt_decode(token) : {};
const initialState = user;

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      state = action.payload;
    })
    .addCase(logOut, (state, action) => {
      state = {};
    });
});

export default userReducer;
