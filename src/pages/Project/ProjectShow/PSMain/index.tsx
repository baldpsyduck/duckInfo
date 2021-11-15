import TitleBar from "components/TitleBar";
import styled from "@emotion/styled";
import { project } from "types/project";
import { Suspense, useMemo, useState } from "react";
import { Alert, Button, Input } from "antd";
import { useAppSelector } from "store/hooks";
import Main from "./Main";
import ProjectTree from "./ProjectTree";
import { Redirect, Route, Switch } from "react-router";
import Loading from "pages/Loading";
import { NavLink } from "react-router-dom";
import { proGetProject } from "api";

export default function PSMain(props: {
  project: Omit<project, "description" | "tags">;
  isAdmin: boolean;
  id: string;
}) {
  const { name, id, projectTree, members, comments } = props.project;

  const isAdmin = props.isAdmin;

  const linkId = props.id;

  const [proName, setproName] = useState<string>(name);
  const [editName, seteditName] = useState<boolean>(false);
  const [proTree, setproTree] = useState<boolean>(false);
  const [btnChange, setbtnChange] = useState<boolean>(false);

  let updateName: string;

  const tags = useAppSelector((store) => store.project.tags);
  const loc = useAppSelector((store) => store.loc.location);
  const isRecruit: boolean = tags.indexOf("招募队友") !== -1;

  let menu: string[] = loc.split(/[/]/);

  menu.splice(0, 4);

  useMemo(() => {
    setproName(name);
  }, [name]);

  return (
    <Container className="psMain">
      <div className="psTitle">
        <TitleBar
          lcChild={
            editName ? (
              <>
                <TitleInput
                  defaultValue={proName}
                  onChange={(e) => {
                    updateName = e.target.value;
                  }}
                />
                &nbsp;
                <Button
                  type="primary"
                  block
                  onClick={(e: any) => {
                    seteditName(false);
                    setproName(updateName || proName);
                  }}
                  style={{ width: "10rem" }}
                >
                  确定
                </Button>
              </>
            ) : (
              <>
                <Title
                  activeClassName="active"
                  to={`/project/show/${linkId}/home`}
                >
                  {proName}
                </Title>
                {menu.map((e, index) => {
                  return (
                    <NavLinkContainer key={index}>
                      {e !== "home" && (
                        <>
                          &nbsp;{">"}&nbsp;
                          <NavLink
                            activeClassName="active"
                            to={`/project/show/${linkId}/${e}`}
                          >
                            {`${e}`}
                          </NavLink>
                        </>
                      )}
                    </NavLinkContainer>
                  );
                })}
                &nbsp;
                {isRecruit && (
                  <Alert
                    type="info"
                    message="本项目处于招募队员阶段"
                    showIcon
                  />
                )}
              </>
            )
          }
          rcChild={
            <>
              <span>{`#${id}`}</span>
              {props.isAdmin && (
                <>
                  <Space />
                  <TitleBtn
                    onClick={() => {
                      switch (menu[0]) {
                        case "home":
                          seteditName(!editName);
                          setbtnChange(!editName);
                          break;
                        case "proTree":
                          setproTree(!proTree);
                          setbtnChange(!proTree);
                          break;
                        default:
                          break;
                      }
                    }}
                  >
                    {btnChange ? "取消" : "编辑"}
                  </TitleBtn>
                </>
              )}
            </>
          }
          size={30}
          title={true}
        />
      </div>

      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            path="/project/show/:id/home"
            render={() => (
              <Main
                projectTree={projectTree}
                isAdmin={isAdmin}
                members={members}
                linkId={linkId}
                comments={comments || []}
              />
            )}
          />
          <Route
            path="/project/show/:id/proTree"
            render={() => <ProjectTree tree={projectTree} />}
          />
          <Redirect to="/project/show/:id/home" />
        </Switch>
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: scroll;
  min-width: 83rem;
`;

const TitleInput = styled(Input)`
  font-size: 30px;
  font-weight: 700;
  width: 50%;
`;

const TitleBtn = styled.button`
  border: 2px solid #2fb9f4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: black;
  font-size: 20px;
  padding: 3px 15px;
`;

const Space = styled.div`
  width: 16px;
`;

const NavLinkContainer = styled.div`
  font-size: 20px;
  color: #c0c0c0;
`;

const Title = styled(NavLink)`
  color: #c0c0c0;
`;
