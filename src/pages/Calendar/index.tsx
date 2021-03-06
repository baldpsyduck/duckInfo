import styled from "@emotion/styled";
import Data from "./Data";
import Timer from "./Timer";
import {informs} from 'config/informs';

export default function Calendar({ onBtnClick,className }: { onBtnClick: () => void,className: string}) {
  return (
    <Container className={className}>
      <BackBtn onClick={onBtnClick}>
        <div>
          返
          <Line />回
        </div>
      </BackBtn>

      <DataContainer>
        <div>
          {informs.map((data) => {
            return (
              <>
                <Data data={data} />
                <Space />
              </>
            );
          })}
        </div>
      </DataContainer>

      <TimerShaft>
        <Timer
          onBtnClick={(e) => {
            let date = e.split(/\//).map((e: any) => {
              return e * 1;
            });
            while (!document.getElementById(`calPage${date[0]}/${date[1]}`)) {
              if (date[1] == 1) {
                date[0]--;
                date[1] = 12;
              } else {
                date[1]--;
              }
            }
            const space = document.getElementById(
              `calPage${date[0]}/${date[1]}`
            );
            space?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </TimerShaft>
    </Container>
  );
}

Calendar.defaultProps={
  className:""
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 9999;
`;

const cBtnSize = 20;
const BackBtn = styled.button`
  width: ${cBtnSize}rem;
  height: ${cBtnSize}rem;
  top: 50vh;
  right: 0;
  z-index: 999;
  background: transparent;
  position: absolute;
  margin-top: -${cBtnSize / 2}rem;
  margin-right: -${cBtnSize / 2}rem;
  border: 2px solid #ffc11f;
  border-radius: ${cBtnSize / 2}rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: left;
    justify-content: flex-end;
    flex-direction: column;
    color: #ffc11f;
    font-family: FZYaoTi;
    font-size: 5rem;
    display: flex;
    width: ${(cBtnSize * 2) / 3}rem;
  }
`;

const Line = styled.div`
  width: ${cBtnSize / 3}rem;
  height: 2px;
  background-color: #ffc11f;
`;

const TimerShaft = styled.div`
  position: absolute;
  width: 10rem;
  height: 60rem;
  padding-left: 1rem;
  top: 50vh;
  margin-top: -30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DataContainer = styled.div`
  padding-top: 5rem;
  position: absolute;
  left: 12rem;
  right: 12rem;
  max-height: 100vh;
  min-width: 120rem;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Space = styled.div`
  height: 5rem;
`;
