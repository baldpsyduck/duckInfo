import styled from "@emotion/styled";
import { useAppSelector } from "store/hooks";
import infoShow from "assets/img/info.jpg";
import { Link } from "react-router-dom";

export default function Infos() {
  const infos = useAppSelector((store) => store.infos.data);

  return (
    <>
      <Title>我的通知</Title>
      <Container>
        <div className="show-container">
          {infos.map((info) => {
            return (
              <ShowContainer to={`/infos/show/${info.id}`}>
                <ShowPic src={info.showPic || infoShow} />
                <TitleContainer>{info.title}</TitleContainer>
              </ShowContainer>
            );
          })}
        </div>
      </Container>
    </>
  );
}

const ShowPic = styled.img`
  width: 20rem;
  height: 12rem;
`;

const TitleContainer = styled.span`
  color: black;
  margin: 1rem 0;
`;

const ShowContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  transition: 300ms;
  /* height: 17rem; */
  :hover {
    transition: 300ms;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-family: "华文中宋", monospace;
`;

const Container = styled.div`
  height: 97%;
  width: 100%;
  overflow: auto;
  .show-container{
      flex-wrap: wrap;
      display: flex;
      grid-gap: 2rem;
      padding: 3rem;
  }
`;
