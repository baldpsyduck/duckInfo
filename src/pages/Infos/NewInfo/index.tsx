import styled from "@emotion/styled";
import { TextW } from "components/Text";
import { useMemo, useState } from "react";
import LeftBar from "./LeftBar";
import Preview from "./Preview";
import { CSSTransition } from "react-transition-group";

export default function NewInfo() {
  const [title, settitle] = useState("");
  const [needTitle, setneedTitle] = useState(true);
  const [pre, setpre] = useState(true);
  useMemo(() => {}, [title]);

  return (
    <>
      <PreStyle />
      <CSSTransition
        in={pre}
        classNames="NIPreviewbox"
        timeout={300}
        unmountOnExit
      >
        <Preview />
      </CSSTransition>
      <Container>
        <LeftBar
          pre={pre}
          setpre={setpre}
          setneedTitle={setneedTitle}
          settitle={settitle}
        />
        <TextW needTitle={needTitle} title={title} />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 5rem;
`;

const PreStyle = styled.div``;
