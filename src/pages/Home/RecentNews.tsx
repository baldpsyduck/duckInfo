import styled from "@emotion/styled";

export default function RecentNews() {
  return (
    <Container>
      <Title>近期要闻</Title>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
`;

const Title = styled.span`
    font-size:3rem;
`;
