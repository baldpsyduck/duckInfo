import styled from "@emotion/styled";
import { Spin, Card, Result, Button } from "antd";
import CommentList from "components/CommentList";
import { Profile } from "./Profile";
import { AboutMe } from "./AboutMe";
import Infos from "./Infos";
import { userGetUser } from "api";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateUser } from "store/features/userSlice";
import { useMemo, useState } from "react";
import { useHistory } from "react-router";

export default function PersonalCenter(props: any) {
  const dispatch = useAppDispatch();

  const [error, seterror] = useState<boolean>(false);
  const [spinning, setspinning] = useState<boolean>(false);

  const history = useHistory();

  const { username } = props.match.params;

  useMemo(() => {
    setspinning(true);
    userGetUser({ who: username })
      .then((res: any) => {
        dispatch(updateUser(res.data));
        setspinning(false);
      })
      .catch((err) => {
        seterror(err);
        setspinning(false);
      });
  }, [username]);

  const user = useAppSelector((store) => store.user.data);
  const me = useAppSelector((store) => store.me.data);

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
            <Profile />
          </ProfileContainer>
          <ProjectContainer>
            <Infos />
          </ProjectContainer>
          <AboutMeContainer>
            <AboutMe
              authority={user.authority}
              isMe={user.username === me.username}
              username={me.username}
              nickname={me.nickname || ""}
            />
          </AboutMeContainer>
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
    "profile project"
    "aboutme project";
  grid-gap: 3rem;
  height: 96%;
  margin-top: 30px;
`;

const ProfileContainer = styled.div`
  grid-area: profile;
  background: white;
  padding: 3rem;
`;

const CardWithTopBorder = styled.div`
  padding: 1.5rem;
  border-top: 0.7rem solid #ffc11f;
  background-color: white;
`;

const ProjectContainer = styled(CardWithTopBorder)`
  grid-area: project;
  overflow: auto;
`;

const AboutMeContainer = styled(CardWithTopBorder)`
  grid-area: aboutme;
`;
