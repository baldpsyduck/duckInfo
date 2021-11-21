import styled from "@emotion/styled";
import { basicColor } from "config/color";

export default function InfoCard({ info }: { info: string }) {
  return (
    <Container>
      <Pic></Pic>
      <Info>{info}</Info>
    </Container>
  );
}

InfoCard.defaultProps = {
  info: "",
};

const Pic = styled.div`
  width: 35rem;
  height: 20rem;
  border-radius: 1rem;
  background-color: ${basicColor};
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
    transition: 300ms;
  }
`;

const Container = styled.div`
  width: 35rem;
  height: 25rem;
  border-radius: 1rem 1rem 0 0;
`;

const Info = styled.div`
  margin-top: 1rem;
`;
