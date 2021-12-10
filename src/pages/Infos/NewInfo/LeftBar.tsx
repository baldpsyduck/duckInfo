import styled from "@emotion/styled";
import { Input } from "antd";

export default function LeftBar() {
  return (
    <Container>
      <Input placeholder="请输入文章标题" />
    </Container>
  );
}

const Title = styled.div``;

const Container = styled.div`
  padding: 2rem;
  position: fixed;
  border: 1px solid #c0c0c0;
  width: 20rem;
  border-radius: 0 5px 5px 0;
  background-color: white;
  left: 0;
  top: 50%;
  z-index: 999;
`;
