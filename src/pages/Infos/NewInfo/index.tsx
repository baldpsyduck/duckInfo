import styled from "@emotion/styled";
import { TextW } from "components/Text";
import { useMemo, useState } from "react";
import LeftBar from "./LeftBar";
import Preview from "./Preview";
import { CSSTransition } from "react-transition-group";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { updateInfoW } from "store/features/infoWSlice";
import { Result } from "antd";
import { RouteComponentProps } from "react-router";
import qs from "querystring";

interface TextWProps extends RouteComponentProps {}

export default function NewInfo(props: TextWProps) {
  const [title, settitle] = useState("");
  const [needTitle, setneedTitle] = useState(true);
  const [pre, setpre] = useState(false);
  const [permit, setpermit] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { id } = qs.parse(props.location.search.slice(1));
  const me = useAppSelector((store) => store.me.data.username);

  const { authID: auth, title: inititle } = useAppSelector(
    (store) => store.infoW
  );

  useMemo(() => {
    if (!id) {
      dispatch(updateInfoW({ id: "", title: "", authID: "", data: "" }));
      settitle("");
    }
    setpermit(me === auth);
    id && settitle(inititle);
  }, []);

  return (
    <>
      {me ? (
        <>
          {(id && permit) || !id ? (
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
          ) : (
            <Result
              status={500}
              title={500}
              subTitle={"您目前不可访问此页面"}
            />
          )}
        </>
      ) : (
        <Result status={500} title={500} subTitle={"请先登录"} />
      )}
    </>
  );
}

NewInfo.defaultProps = {
  background: "",
  data: "",
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 5rem;
`;

const PreStyle = styled.div`
  + .NIPreviewbox-enter {
    opacity: 0;
  }
  + .NIPreviewbox-enter-active {
    opacity: 1;
    transition: 300ms;
  }
  + .NIPreviewbox-enter-done {
    opacity: 1;
  }
  + .NIPreviewbox-exit {
    opacity: 1;
  }
  + .NIPreviewbox-exit-active {
    opacity: 0;
    transition: 300ms;
  }
  + .NIPreviewbox-exit-done {
    opacity: 0;
  }
`;
