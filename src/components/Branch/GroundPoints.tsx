import styled from "@emotion/styled";
import { Button } from "antd";
import Avatars from "components/Avatars";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ShowMD } from "components/MarkDown";
import { CharacterBox, FlexLine, MembersContainer } from "./StyleComponets";
import Title from "./Title";
import { simpleUser } from "types/user";

interface propsType {
  members: simpleUser[];
  title: string;
  num: string;
}

GroundPoints.defaultProps = {};

export default function GroundPoints(props: propsType) {
  const [rotate, setrotate] = useState(false);

  const { members, title, num } = props;

  const [mems, setmems] = useState(members);

  const TransationStyle = styled.div`
    + div {
      .GPbox {
        opacity: 0;
        height: 0px;
        overflow: hidden;
      }

      .GPbox-enter,
      .GPbox-appear {
        opacity: 0;
        height: 0px;
        overflow: hidden;
      }

      .GPbox-enter-active,
      .GPbox-appear-active {
        opacity: 1;
        height: 420px;
        transition: 300ms;
        overflow: visible;
      }

      .GPbox-enter-done {
        overflow: visible;
        opacity: 1;
        height: 420px;
      }

      .GPbox-exit {
        overflow: visible;
        opacity: 1;
        height: 420px;
      }

      .GPbox-exit-active {
        overflow: visible;
        height: 0px;
        opacity: 0;
        transition: 300ms;
      }

      .GPbox-exit-done {
        overflow: hidden;
        height: 0px;
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <Title
        children={
          <>
            <CharacterBox>{title}</CharacterBox>

            <Button
              onClick={() => {
                setrotate(!rotate);
              }}
              type="primary"
              ghost
            >
              <CharacterBox>节点详情</CharacterBox>
            </Button>

            <MembersContainer>
              <CharacterBox>负责人：</CharacterBox>
              <Avatars
                onCloseClick={(_, username, num) => {
                  setmems(
                    mems.filter((mem) => {
                      return mem.username !== username;
                    })
                  );
                  console.log(username);
                  console.log(num);
                }}
                num={num}
                members={mems}
              />
            </MembersContainer>
          </>
        }
        onBtnClick={() => {
          setrotate(!rotate);
        }}
      />
      <FlexLine>
        <>
          <TransationStyle />

          <div>
            <CSSTransition in={rotate} classNames="GPbox" timeout={300}>
              <Title className="GPbox" isText>
                <>
                  <div />
                  <MDContainer>
                    <ShowMD />
                  </MDContainer>
                </>
              </Title>
            </CSSTransition>
          </div>
        </>
      </FlexLine>
    </>
  );
}

const MDContainer = styled.div`
  margin: 10px 0px;
  width: 60vw;
  height: 400px;
`;
