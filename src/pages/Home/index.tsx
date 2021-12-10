import styled from "@emotion/styled";
import "./Home.css";
import RecentNews from './RecentNews';

export default function Home() {


  return (
    <Container className="home">
      <RecentNews/>
      {
        ()=>{return <div/>}
      }
    </Container>
  );
}

const Container = styled.div`
`;
