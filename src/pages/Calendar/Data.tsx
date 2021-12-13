import styled from "@emotion/styled";
import InfoCard from "components/InfoCard";
import {cardInfo} from 'types/inform';


export default function Data({
  data,
}: {
  data: { date: string; data: cardInfo[] };
}) {
  const { date, data: info } = data;
  return (
    <Container id={`calPage${data.date}`} >
      <Title>{date.replace("/", "年") + "月"}</Title>
      <CardContainer>
        {info.map((i) => {
          return <InfoCard info={i.info}/>;
        })}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  
`;

const Title = styled.div`
  font-size: 3rem;
`;

const CardContainer = styled.div`
  display: flex;
  grid-gap:2rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
