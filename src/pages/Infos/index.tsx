import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router";
const NewInfo = lazy(() => import("./NewInfo"));
const HotInfo = lazy(() => import("./HotInfo/HotInfo"));
const VolInfo = lazy(() => import("./VolInfo/VolInfo"));
const InfoShow = lazy(() => import("./InfoShow/InfoShow"));

export default function Infos() {
  return (
    <Switch>
      <Route path="/infos/new" component={NewInfo} />
      <Route path="/infos/hot" component={HotInfo} />
      <Route path="/infos/vol" component={VolInfo} />
      <Route path="/infos/show/:infoID" component={InfoShow} />
      <Redirect to="/infos/hot" />
    </Switch>
  );
}
