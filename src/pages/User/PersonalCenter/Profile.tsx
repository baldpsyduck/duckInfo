import { Button, Divider, Tag } from "antd";
import styled from "@emotion/styled";
import { MailOutlined } from "@ant-design/icons";
import { user } from "types/user";
import Avatar from "components/UpIMG/Avatar";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateAvatar } from "store/features/meSlice";
import defaultAvatar from 'assets/img/logo.png'

export const Profile = ({ user }: { user: user }) => {

  const { avatar, username, email, infos } = user;
  const mename = useAppSelector((store) => store.me.data.username);
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Acontainer>
          {mename === username ? (
            <Avatar
              imgFunc={(e) => {
                dispatch(updateAvatar(e));
              }}
              desText="点击上传头像"
              style={{ width: "20rem" }}
            />
          ) : (
            <AvatarIMG src={avatar||defaultAvatar} />
          )}
        </Acontainer>
        <Title>{username}</Title>
        <SubTitle>
          <MailOutlined />
          <EmailButton
            type={"text"}
            size={"small"}
            href={`mailto:${email}`}
            ghost
          >
            {email}
          </EmailButton>
        </SubTitle>
        <ProjectSummary>
          <ProjectSummaryBlock>
            <ProjectSummaryNumber>{infos?.length||0}</ProjectSummaryNumber>
            <ProjectSummaryText>活动文章</ProjectSummaryText>
          </ProjectSummaryBlock>
          <ProjectSummaryBlock>
            <ProjectSummaryNumber>0</ProjectSummaryNumber>
            <ProjectSummaryText>活动收藏</ProjectSummaryText>
          </ProjectSummaryBlock>
        </ProjectSummary>
        <DividerInProfile />
      </Container>
    </>
  );
};

const AvatarIMG=styled.img`
  width:100%;
  height:100%
`

const Acontainer = styled.div`
  width: 20rem;
  height: 20rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const SubTitle = styled.div`
  font-size: 1.6rem;
  color: #c0c0c0;
`;

const EmailButton = styled(Button)`
  color: #808080;
`;

const ProjectSummary = styled.div`
  font-family: "华文中宋", monospace;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ProjectSummaryBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectSummaryNumber = styled.div`
  font-size: 4rem;
  margin: -0.25rem 0 -1.25rem 0;
`;

const ProjectSummaryText = styled.div`
  font-size: 1.6rem;
  color: #a0a0a0;
`;

const DividerInProfile = styled(Divider)`
  margin: 1.2rem 0;
`;

const TagInProfile = styled(Tag)`
  margin: 0.2rem 0.4rem;
`;
