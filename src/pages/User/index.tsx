import Loading from "pages/Loading";
import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { templateUser } from "config/user";

import "./user.css";

const PersonalCenter = lazy(() => import("./PersonalCenter"));
const Users = lazy(() => import("./Users"));

export default function User() {
  return (
    <div className="userPage">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/user/users" component={Users} />
          <Route path={`/user/me/:username`} component={PersonalCenter} />
          <Redirect to="/user/users" />
        </Switch>
      </Suspense>
    </div>
  );
}
