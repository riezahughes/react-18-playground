import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Outlet } from "react-router-dom";
import { Loading } from "../";
import { OktaAuth } from "@okta/okta-auth-js";

const login = async (oktaAuth: OktaAuth) => {
  await oktaAuth.signInWithRedirect({ originalUri: "/" });
};

export const RequiredAuth = () => {
  const { oktaAuth, authState } = useOktaAuth();
  if (!authState) return <Loading />;
  if (authState.isAuthenticated) {
    return <Outlet />;
  } else {
    login(oktaAuth).catch((err: Error) => console.log(err));
    return null;
  }
};
