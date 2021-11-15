import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar } from "antd";
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
    <div className="user">
      {me.username ? (
        <Popover
          placement="topLeft"
          trigger="click"
          arrowPointAtCenter
          content={<UserPullDown />}
        >
          <button>
            <LoginBtn className="headPortrait">
              <span>&nbsp;登&nbsp;录&nbsp;</span>
            </LoginBtn>
          </button>
        </Popover>
      ) : (
        <button>
          <LoginBtn className="headPortrait"  onClick={click}>
            <span>&nbsp;登&nbsp;录&nbsp;</span>
          </LoginBtn>
        </button>
      )}
    </div>
  );
}

const LoginBtn = styled.div`
  border: 1px solid ${basicColor};
  padding: 0.5rem 0.8rem;
  color: ${basicColor};
`;
