import styled from "@emotion/styled";
import { TextR } from "components/Text";

interface InfoShowProps{
  background?:string;
  data?:string;
  user?:string;
}

export default function InfoShow(props: InfoShowProps) {

  const {data,background} = props;

  return (
    <Container>
      <span>132</span>
      <TextR data={data||""} />
      <img src={background||""} alt="" />
    </Container>
  );
}

const Container = styled.div`
  height:100%;
  width:100%;
`