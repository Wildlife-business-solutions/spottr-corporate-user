import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthRoute({ path, component, exact }) {
  const { isAuth } = useSelector((state) => state.authorize);

  if (!isAuth) {
    return <Redirect from={path} to={"/login"} />;
  }
  return <Route exact={exact} path={path} component={component} />;
}
