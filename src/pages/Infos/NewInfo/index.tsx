import styled from "@emotion/styled";
import { TextW } from "components/Text";
import LeftBar from "./LeftBar";

export default function NewInfo() {
  return (
    <Container>
      <LeftBar />
      <TextW title="122"/>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 5rem;
`;
