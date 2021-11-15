import styled from "@emotion/styled";
import Loading from "pages/Loading";
import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

import "./Project.css"

const NewP = lazy(() => import("./NewP"));
const ProjectList = lazy(() => import("./ProjectList"));
const ProjectShow = lazy(() => import("./ProjectShow"));



export default function Project() {

  return (
    <Container className="project">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/project/list" component={ProjectList} />
          <Route path="/project/newP" component={NewP} />
          <Route path="/project/show/:id" component={ProjectShow} />
          <Redirect to="/project/list" />
        </Switch>
      </Suspense>
    </Container>
  )
}

const Container = styled.div`
    height: 100%;
`