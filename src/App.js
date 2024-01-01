import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  DASHBOARD,
  FORGOTPASSWORD,
  HOME,
  LOGIN,
  SIGNUP,
} from "utilities/static/routes/routes";
import { RESETPASSWORD } from "./utilities/static/routes/routes";

import Login from "pages/signin/Login";
import JoinPage from "pages/signin/register";
import Dashboard from "pages/dashboard/main";
import ForgotPassword from "./pages/signin/forgot-password";
import ResetPassword from "./pages/signin/reset-password";
import AuthRoute from "./components/global/AuthRoute";
import Home from "pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        {/* <Route exact path={HOME} component={Home} /> */}
        <Route path={LOGIN} component={Login} />
        <Route path={SIGNUP} component={JoinPage} />
        <Route path={FORGOTPASSWORD} component={ForgotPassword} />
        <Route path={RESETPASSWORD} component={ResetPassword} />
        <AuthRoute path={DASHBOARD} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
