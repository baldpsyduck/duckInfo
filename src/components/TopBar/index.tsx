import styled from "@emotion/styled";
import Left from "./Left";
import Right from "./Right";
import "./TopBar.css";
import { CSSTransition } from "react-transition-group";
import { useAppSelector } from "store/hooks";

export default function TopBar({ wheel }: { wheel: boolean }) {
  const loc = useAppSelector((store) => store.loc.location);

  return (
    <CSSTransition in={wheel} classNames={"tContainer"} timeout={300}>
      <TopBarContainer
        className={loc == "/home" && wheel ? "hometCotainer" : "tContainer"}
      >
        <Container className="topBarOuter">
          <Left />
          <Right />
        </Container>
      </TopBarContainer>
    </CSSTransition>
  );
}

TopBar.defaultProps = {
  wheel: false,
};

const Container = styled.div`
  width: 130rem;
`;

const TopBarContainer = styled.div`
    flex-grow: 0;
  width: 100vw;
  min-width: 130rem;
  height: 7.48rem;
  z-index: 999;
  display: flex;
  justify-content: center;
`;
