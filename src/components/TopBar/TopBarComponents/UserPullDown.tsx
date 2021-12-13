import { useAppDispatch, useAppSelector } from "store/hooks";
import { changeLogin } from "store/features/loginSlice";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function UserPullDown() {
  const me = useAppSelector((store) => store.me.data);

  return (
    <Container>
      <PulldownStyle className="menuInner" to={`/user/me/${me.username}`}>
        个人中心
      </PulldownStyle>
      <Divider />
      <PulldownStyle className="menuInner" to={`/user/me/${me.username}`}>
        我的团队
      </PulldownStyle>
      <Divider />
      <PulldownStyle className="menuInner" to={`/user/me/${me.username}`}>
        我的收藏
      </PulldownStyle>
      <Divider />
      <PulldownStyle className="menuInner" to={`/user/me/${me.username}`}>
        草稿箱
      </PulldownStyle>
      <Divider />
      <PulldownStyle className="menuInner" to={`/user/me/${me.username}`}>
        我的志愿
      </PulldownStyle>
      <Divider />
      <PulldownStyle className="menuInner" to={`/user/me/${me.username}`}>
        退出登录
      </PulldownStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 0.8rem;
`;

const PulldownStyle = styled(Link)`
  color: #6a6f7b;
  font-family: ABeeZee;
`;

const Divider = styled.div`
  width: 130%;
  background-color: #c0c0c0;
  height: 1px;
`;
