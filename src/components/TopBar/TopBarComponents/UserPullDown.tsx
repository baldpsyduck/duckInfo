import { useAppDispatch, useAppSelector } from "store/hooks";
import { changeLogin } from "store/features/loginSlice";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function UserPullDown() {
  const me = useAppSelector((store) => store.me.data);

  const dispatch = useAppDispatch();
  let click = () => {
    dispatch(changeLogin(true));
  };

  return (
    <div>
      {me.username && (
        <PulldownStyle className="menuInner" to={`/user/me/${me.username}`}>
          个人中心
        </PulldownStyle>
      )}
    </div>
  );
}

const PulldownStyle = styled(Link)`
  color: black;
`;
