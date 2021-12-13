import styled from "@emotion/styled";
import { useAppSelector } from "store/hooks";
import { TextR } from "components/Text";

export default function Preview() {
  const background = useAppSelector((store) => store.infoW.background);
  const data = useAppSelector((store) => store.infoW.data);

  return (
    <Container>
      <Article>
        <TextR data={data} />
      </Article>
      {background && <Background src={background} alt="" />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  position: absolute;
  z-index: 999;
  overflow: hidden;
`;

const Article = styled.div`
  padding: 3rem;
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  overflow: auto;
  width: 80%;
`;

const Background = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
