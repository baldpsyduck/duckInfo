import styled from "@emotion/styled";
import { basicColor } from "config/color";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { changeLogin } from "store/features/loginSlice";

export default function Publish() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const loc = useAppSelector((store) => store.loc.location);
  const me = useAppSelector((store) => store.me.data);

  return (
    <>
      {me.username ? (
        <LinkC to="/infos/new">
          <Container>发布通知</Container>
        </LinkC>
      ) : (
        <button onClick={()=>{dispatch(changeLogin(true))}}>
          <Container>发布通知</Container>
        </button>
      )}
    </>
  );
}

const Container = styled.div`
  background-color: ${basicColor};
  padding: 0.5rem 0.8rem;
  color: white;
`;

const LinkC=styled(Link)`
  height:100%;
`