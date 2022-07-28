import { useTitle } from "hooks/useTitle";
import React from "react";
import { SignUpComponent } from "../../components";
export const SignUp = () => {
  useTitle("Signup | Gotham Store");
  return <div><SignUpComponent/></div>;
};
