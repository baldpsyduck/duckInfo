import { Avatar, Button, Divider, Tag } from "antd";
import styled from "@emotion/styled";
import { MailOutlined } from "@ant-design/icons";
import {user} from 'types/user';

export const Profile = ({user}:{user:user}) => {

  const {avatar,username,email,projects,tags}=user

  return (
    <>
    <Container>
      <Avatar
        size={128}
        src={<img src={avatar} alt={"UserAvatar"} />}
      />
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
          <ProjectSummaryNumber>{projects?.length}</ProjectSummaryNumber>
          <ProjectSummaryText>参与项目</ProjectSummaryText>
        </ProjectSummaryBlock>
        <ProjectSummaryBlock>
          <ProjectSummaryNumber>4.4w</ProjectSummaryNumber>
          <ProjectSummaryText>项目点赞</ProjectSummaryText>
        </ProjectSummaryBlock>
      </ProjectSummary>
      <DividerInProfile />
      <div>
        {
          tags&&tags.map(tag =>{
            <TagInProfile color={"red"}>{tag}</TagInProfile>
          })
        }
      </div>
    </Container> 
    </>
  );
};

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
