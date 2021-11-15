import { simpleProject } from "types/project";
import styled from "@emotion/styled";
import { Card, Divider, Tag } from "antd";

export const RecentProjects = ({
  projectProps,
}: {
  projectProps: simpleProject[];
}) => {
  return (
    <Container>
      <Title>近期参与</Title>
      <ProjectContainer>
        {projectProps.map((item) => (
          <ProjectCard size={"small"} hoverable>
            <ProjectCardTitle>{item.name}</ProjectCardTitle>
            <ProjectCardSubtitle>
              {" - "}
              {item.id}
            </ProjectCardSubtitle>
            <DividerInCard />
            <TextInCard>{item.description}</TextInCard>
            <div>
              {item.tags.map((tag) => (
                <Tag color={"default"}>
                  {tag}
                </Tag>
              ))}
            </div>
          </ProjectCard>
        ))}
      </ProjectContainer> 
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-family: "华文中宋", monospace;
`;

const ProjectContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const ProjectCard = styled(Card)``;

const ProjectCardTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const ProjectCardSubtitle = styled.span`
  font-size: 1.8rem;
  color: #c0c0c0;
`;

const DividerInCard = styled(Divider)`
  margin: 0.4rem 0 1rem 0;
`;

const TextInCard = styled.div`
  margin: 0 0 1rem 0;
  color: #606060;
`;
