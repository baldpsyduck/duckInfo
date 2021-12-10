import { BellOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Popover } from "antd";
import UserPullDown from "./UserPullDown";
import { basicColor } from "config/color";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { changeLogin } from "store/features/loginSlice";

export default function User() {
  const me = useAppSelector((store) => store.me.data);

  const dispatch = useAppDispatch();
  let click = () => {
    !me.username && dispatch(changeLogin(true));
  };

  return (
    <Container className="user">
      {me.username ? (
      <>
        <Message>
          <BellOutlined />
        </Message>
        <Popover
          placement="topLeft"
          trigger="click"
          arrowPointAtCenter
          content={<UserPullDown />}
        >
          <button>
            <Avatar />
          </button>
        </Popover>
      </>
      ) : (
        <button>
          <LoginBtn className="headPortrait"  onClick={click}>
            <span>&nbsp;登&nbsp;录&nbsp;</span>
          </LoginBtn>
        </button>
      )}
    </Container>
  );
}

const Container = styled.div`
width:10rem;
display:flex;
justify-content:space-between;
align-items:center;
`;

const Message = styled.button`
  color: white;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size:2.8rem;
`;

const LoginBtn = styled.div`
  border: 1px solid ${basicColor};
  padding: 0.5rem 0.8rem;
  color: ${basicColor};
`;

const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: gray;
  border-radius: 4rem;
`;
