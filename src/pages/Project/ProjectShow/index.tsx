import PSMain from "./PSMain";
import PSRight from "./PSRight";
import "./ProjectShow.css";
import styled from "@emotion/styled";

import { proInfo as iniPro, blankPro } from "config/project";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setTags } from "store/features/projectSlice";
import { project } from "types/project";
import { proGetProject } from "api";
import { Result, Button, Spin } from "antd";
import { useHistory } from "react-router";

let administrator: string[] = [];

export default function ProjectShow(props: any) {
  const { id } = props.match.params;

  const dispatch = useAppDispatch();

  const username = useAppSelector((store) => store.me.data.username);
  const projectInfo = useAppSelector((store) => store.project);

  const [proInfo, setproInfo] = useState<project>(iniPro);
  const [error, seterror] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);

  /* useMemo(() => {
    setloading(true);
    proGetProject({ id: id })
      .then((req) => {
        req.data ? setproInfo(() => req.data) : seterror(true);
        console.log(req.data);
        proInfo.members.map((mem: any) => {
          if (mem.role === "leader") {
            administrator.push(mem.username);
          }
        });
        setloading(false);
      })
      .catch(() => {
        setloading(false);
        seterror(true);
      });
    dispatch(setTags(proInfo.tags));
  }, []); */

  const isAdmin: boolean = administrator.indexOf(username) !== -1;
  const { description, links, tags, ...project } = proInfo;

  const history = useHistory();

  return (
    <>
      {loading ? (
        <SpinContainer />
      ) : error ? (
        <Result
          status="404"
          title="404"
          subTitle="该项目不存在"
          extra={
            <Button
              onClick={() => {
                history.goBack();
              }}
              type="primary"
            >
              返回上一页
            </Button>
          }
        />
      ) : (
        <Container className="projectShow">
          <PSMain project={{ ...project }} isAdmin={isAdmin} id={id} />
          <div className="psCutline" />
          <PSRight
            isAdmin={isAdmin}
            tags={tags}
            description={description}
            links={links}
          />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: white;
  overflow-x: auto;
`;

const SpinContainer = styled(Spin)`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
