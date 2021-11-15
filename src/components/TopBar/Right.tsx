import styled from "@emotion/styled";
import { useAppSelector } from "store/hooks";
import User from "./TopBarComponents/User";
import Publish from "./TopBarComponents/Publish";

export default function Right() {
  const user = useAppSelector((store) => store.me.data);

  return (
    <Container className="right">
      <User />
      <Publish />
    </Container>
  );
}

const Container = styled.div`
  width: 25rem;
`;
