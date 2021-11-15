import { Suspense, lazy, useMemo } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router";

import TopBar from "components/TopBar";
import Login from "components/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import Loading from "pages/Loading";

import { useAppDispatch } from "store/hooks";
import { useAppSelector } from "store/hooks";
import { updateLoc } from "store/features/locSlice";
import { setClientC } from "store/features/moveSlice";
import { updateUsername } from "store/features/meSlice";

import "./App.css";
import LeftBar from "components/LeftBar";

const Project = lazy(() => import("pages/Project"));
const User = lazy(() => import("pages/User"));

export default function App() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  history.listen((route) => dispatch(updateLoc(route.pathname)));

  const login = useAppSelector((store) => store.login);
  const selected = useAppSelector((store) => store.move.selected);

  const mouseMove = (e: any) => {
    if (selected) {
      dispatch(setClientC([e.clientX, e.clientY]));
    }
  };

  return (
    <div className="app" onMouseMove={(e) => mouseMove(e)}>
      <TopBar />

      <div className="behind">
        {login.chooseLogin && <Login />}

        <LeftBar />

        <div className="main">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/project" component={Project} />
              <Route path="/user" component={User} />
              <Route path="/register" component={Register} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
        </div>
      </div>
      <div className="bottom">Made by OpenLab-web @2021 兴趣开放实验室</div>
    </div>
  );
}
