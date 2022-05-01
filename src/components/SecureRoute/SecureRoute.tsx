/*!
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { toRelativeUrl } from "@okta/okta-auth-js";
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
