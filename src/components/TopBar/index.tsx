import styled from "@emotion/styled";
import Left from "./Left";
import Right from "./Right";
import "./TopBar.css";
export default function TopBar() {
  return (
    <PaddingContainer>
      <Container className="topBarOuter">
        <Left />
        <Right />
      </Container>
    </PaddingContainer>
  );
}

const Container = styled.div`
  width: 130rem;
`;

const PaddingContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;
