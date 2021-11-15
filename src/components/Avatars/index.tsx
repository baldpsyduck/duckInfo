import { Avatar, Popover, Badge, Select } from "antd";
import { CloseCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { simpleUser } from "types/user";
import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

interface AvatarsProps {
  members: simpleUser[];
  edit?: boolean;
  num?: string;
  onCloseClick?: (e: any, username?: string, num?: string) => void;
  onAddClick?: (e: any, num?: string) => void;
}

Avatars.defaultProps = {
  edit: true,
};

export default function Avatars(props: AvatarsProps) {
  const { members, edit, num, onCloseClick, onAddClick } = props;
  const [add, setadd] = useState<boolean>(false);

  return (
    <Container>
      {members.map((mem) => {
        return (
          <AvatarContainer
            edit={edit}
            key={mem.username}
            username={mem.username}
            onCloseClick={onCloseClick}
            num={num}
          />
        );
      })}
      {edit && (
        <>
          <PlusContainer>
            <CSSTransition
              in={!add}
              classNames="plusBox"
              timeout={300}
              unmountOnExit
            >
              <PlusBtn
                onClick={() => {
                  setadd(true);
                }}
              >
                <PlusOutlined style={{ color: "white" }} />
              </PlusBtn>
            </CSSTransition>
          </PlusContainer>
          <PlusContainer>
            <CSSTransition
              in={add}
              classNames="plusBox"
              timeout={300}
              unmountOnExit
            >
              <Select style={{width:"100px"}}>
              </Select>
            </CSSTransition>
          </PlusContainer>
        </>
      )}
    </Container>
  );
}

interface AvatarContainerProps extends Omit<AvatarsProps, "members"> {
  username: string;
}

export const AvatarContainer = (props: AvatarContainerProps) => {
  const { username, edit, num, onCloseClick } = props;

  return (
    <>
      {edit ? (
        <CornerContainer>
          <button
            className="avatarCloseBtn"
            onClick={(e) => {
              onCloseClick && onCloseClick(e, username, num || "");
            }}
          >
            <CloseCircleTwoTone twoToneColor="#ff4d4f" />
          </button>
          <button>
            <Popover key={username} content={<b>{username}</b>}>
              <Avatar
                src={
                  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }
              />
            </Popover>
          </button>
        </CornerContainer>
      ) : (
        <button>
          <Popover key={username} content={<b>{username}</b>}>
            <Avatar
              src={
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              }
            />
          </Popover>
        </button>
      )}
    </>
  );
};

AvatarContainer.defaultProps = {
  edit: true,
};

const Container = styled.div`
  display: flex;
  grid-gap: 1rem;
`;

const CornerContainer = styled.div`
  position: relative;
  .avatarCloseBtn {
    position: absolute;
    z-index: 999;
    left: 75%;
    top: -25%;
  }
`;

const PlusContainer = styled.div`
  .GPbox-enter,
  .GPbox-appear {
    width: 0px;
  }

  .GPbox-enter-done {
    width: 100px;
    border-radius: 5%;
    background-color: white;
    transition: 300ms;
    border: 1px solid #c0c0c0;
  }

  .plusBox-exit {
    width: 32px;
    border-radius: 100%;
    border: 1px solid #c0c0c0;
  }

  .plusBox-exit-active {
    width: 100px;
    border-radius: 5%;
    background-color: white;
    transition: 300ms;
    border: 1px solid #c0c0c0;
  }

  .plusBox-exit-done {
    width: 100px;
    background-color: white;
    border-radius: 5%;
    border: 1px solid #c0c0c0;
  }
`;

const PlusBtn = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 100%;
  background-color: #c0c0c0;
`;
