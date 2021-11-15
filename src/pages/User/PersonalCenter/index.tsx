import styled from "@emotion/styled";
import { Spin, Card, Result, Button } from "antd";
import CommentList from "components/CommentList";
import { Profile } from "./Profile";
import { RecentProjects } from "./RecentProjects";
import { AboutMe } from "./AboutMe";
import { userGetUser } from "api";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateUser } from "store/features/userSlice";
import { useMemo, useState } from "react";
import { useHistory } from "react-router";
import { comments } from "config/comments";
import { fetchHttp } from "utils/http";
import Axios  from "axios";

export default function PersonalCenter(props: any) {
  const dispatch = useAppDispatch();

  const [error, seterror] = useState<boolean>(false);
  const [spinning, setspinning] = useState<boolean>(false);

  const history = useHistory();

  const { username } = props.match.params;

  useMemo(() => {
    setspinning(true);
    
    // Axios.get("http://10.102.32.57:3001/api/user/getUser?who=qwe",{withCredentials: true})

    userGetUser({ who: username })
      .then((res:any) => {
        dispatch(updateUser(res.data));
        setspinning(false);
      })
      .catch((err) => {
        if (err.code >= 500 && err.code < 600) {
          seterror(err);
        }
        setspinning(false);
      });

  }, [username]);

  const user = useAppSelector((store) => store.user.data);

  return (
    <>
      {error ? (
        <Result
          status="404"
          title="404"
          subTitle="当前用户不存在"
          extra={
            <Button
              type="primary"
              onClick={() => {
                history.goBack();
              }}
            >
              返回
            </Button>
          }
        />
      ) : (
        <Container className="PCContainer">
          <ProfileContainer>
            <Profile user={user} />
          </ProfileContainer>
          <ProjectContainer size={"small"}>
            <RecentProjects projectProps={user.projects || []} />
          </ProjectContainer>
          <AboutMeContainer size={"small"}>
            <AboutMe
              description={user.description || ""}
              authority={user.authority}
            />
          </AboutMeContainer>
          <NewsContainer size={"small"}>
            <CommentList comments={user.comments || []} />
          </NewsContainer>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 34rem 1fr;
  grid-template-rows: 24rem 16rem 1fr;
  grid-template-areas:
    "profile project"
    "profile news"
    "aboutme news";
  grid-gap: 3rem;
  height: 96%;
  margin-top: 30px;
`;

const ProfileContainer = styled(Card)`
  grid-area: profile;
`;

const CardWithTopBorder = styled(Card)`
  border-top: 0.7rem solid #2cb3ff;
`;

const ProjectContainer = styled(CardWithTopBorder)`
  grid-area: project;
`;

const AboutMeContainer = styled(CardWithTopBorder)`
  grid-area: aboutme;
`;

const NewsContainer = styled(CardWithTopBorder)`
  overflow-y: auto;
  grid-area: news;
  padding: 4px;
  font-size: 4rem;
  color: #c0c0c0;
  overflow-y: scrol;
`;
