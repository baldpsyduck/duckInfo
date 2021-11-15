import { ReactChild, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ChildPoints from "./ChildPoints";
import { CharacterBox, FlexLine, MembersContainer } from "./StyleComponets";
import Title from "./Title";
import styled from "@emotion/styled";
import Avatars from "components/Avatars";
import { simpleUser } from "types/user";
import { useClientRect } from "utils/useClientRect";
import { nanoid } from "nanoid";

interface FamilyProps {
  children?: ReactChild;
  members: simpleUser[];
  title: string;
  num: string;
}

export default function FamilyPoints(props: FamilyProps) {
  const [visible, setvisible] = useState<boolean>(true);

  const [rect, ref] = useClientRect();

  const [height, setheight] = useState<number>(rect?.height || 0);

  const className: string = `branch${nanoid()}`;

  const { children, members, title, num } = props;

  const [mems, setmems] = useState(members);

  const TransationStyle = styled.div`
    + div {
      .${className}-enter, .${className}-appear {
        opacity: 0;
        height: 0px;
      }

      .${className}-enter-active, .${className}-appear-active {
        opacity: 1;
        height: ${height}px;
        transition: 300ms;
      }

      .${className}-exit {
        opacity: 1;
        height: ${height}px;
      }

      .${className}-exit-active {
        height: 0px;
        opacity: 0;
        transition: 300ms;
      }

      .${className}-exit-done {
        height: 0px;
        opacity: 0;
        overflow: hidden;
      }
    }
  `;

  return (
    <>
      <Title
        onBtnClick={(e: any) => {
          setvisible(!visible);
          const element = document.querySelector(`.${className}`);
          element &&
            setheight(
              element.clientHeight !== 0 ? element.clientHeight : height
            );
        }}
      >
        <>
          <CharacterBox>{title}</CharacterBox>

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
      </Title>

      <FlexLine>
        <TransationStyle />
        <div>
          <CSSTransition
            in={visible}
            timeout={300}
            classNames={className}
            appear={true}
          >
            <Container className={className} ref={ref}>
              <ChildPoints children={children} />
            </Container>
          </CSSTransition>
        </div>
      </FlexLine>
    </>
  );
}

FamilyPoints.defaultProps = {
  members: [],
  title: "",
};

const Container = styled.div``;

const EditBtn = styled.button`
  color: #2fb9f4;
`;
