import styled from "@emotion/styled";
import { basicColor } from "config/color";

export default function Publish() {
  return (
    <button>
      <Container>发布通知</Container>
    </button>
  );
}

const Container = styled.div`
  background-color: ${basicColor};
  padding: 0.5rem 0.8rem;
  color: white;
`;
