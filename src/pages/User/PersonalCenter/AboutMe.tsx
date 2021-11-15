import styled from "@emotion/styled";

export const AboutMe = ({ description,authority }: { description: string,authority: number}) => {

  return (
    <Container>
      <Title>关于我</Title>
      <Text>{description}</Text>
      <UserTagContainer>
        <UserTag>{authority === 2 ? "行政组" : "成员"}</UserTag>
      </UserTagContainer>
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

const Text = styled.div`
  margin: 0.8rem 0.2rem;
  font-size: 1.4rem;
  color: #a0a0a0;
`;

const UserTagContainer = styled.div`
  margin: 2rem 0;
`;

const UserTag = styled.span`
  font-size: 1.6rem;
  font-family: "华文中宋", monospace;
  background-color: #a4deff;
  padding: 0.6rem 1rem;
  margin: 0.3rem 0.5rem;
`;
