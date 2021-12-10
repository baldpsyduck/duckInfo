import { Suspense, lazy, useState, useMemo, useRef, RefObject } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router";

import TopBar from "components/TopBar";
import Login from "components/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import Loading from "pages/Loading";
import Calendar from "pages/Calendar";
import { basicColor } from "config/color";

import { homeInfos } from "config/informs";

import { useAppDispatch } from "store/hooks";
import { useAppSelector } from "store/hooks";
import { updateLoc } from "store/features/locSlice";
import { setClientC } from "store/features/moveSlice";
import { Carousel } from "antd";
import { CSSTransition } from "react-transition-group";
import { ArrowDownOutlined } from "@ant-design/icons";

import "./App.less";
import styled from "@emotion/styled";

const contentStyle: any = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const User = lazy(() => import("pages/User"));
const Infos = lazy(() => import("pages/Infos"));

export default function App() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  history.listen((route) => dispatch(updateLoc(route.pathname)));

  const login = useAppSelector((store) => store.login);
  const loc = useAppSelector((store) => store.loc.location);
  const selected = useAppSelector((store) => store.move.selected);

  const divRef = useRef<HTMLDivElement>(null);
  const [calendar, setcalendar] = useState<boolean>(false);

  const mouseMove = (e: any) => {
    if (selected) {
      dispatch(setClientC([e.clientX, e.clientY]));
    }
  };

  const [wheel, setwheel] = useState<boolean>(loc == "/home");
  const [cnumber, setcnumber] = useState<number>(0);

  useMemo(() => {
    setwheel(loc == "/home");
  }, [loc]);

  return (
    <>
      <div
        className={"app"}
        onMouseMove={(e) => mouseMove(e)}
        onWheel={(e) => {
          if (!calendar) {
            setwheel(
              e.deltaY < 0 && loc == "/home" && 0 == divRef.current?.scrollTop
            );
            setcnumber(0);
          }
        }}
      >
        <CSSTransition in={calendar} classNames={"calContainer"} timeout={300}>
          <Calendar
            onBtnClick={() => {
              setcalendar(false);
            }}
            className={calendar ? "" : "calContainer"}
          />
        </CSSTransition>

        <TopBar wheel={wheel} />

        <TransationContainer>
          <CSSTransition
            in={wheel}
            classNames={"cContainer"}
            timeout={300}
            unmountOnExit
          >
            <div className="cContainer">
              <Carousel
                autoplay
                className="cContainer"
                dotPosition={"left"}
                beforeChange={(f, t) => {
                  setcnumber(t);
                }}
              >
                {homeInfos.map((info) => {
                  return (
                    <div>
                      <h3 style={contentStyle}>{info.key}</h3>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </CSSTransition>
        </TransationContainer>

        {login.chooseLogin && (
          <LoginContainer>
            <Login />
          </LoginContainer>
        )}

        {loc === "/home" && (
          <div>
            <ClanderBtn
              onClick={() => {
                setcalendar(true);
              }}
            >
              <div>
                日
                <Line />历
              </div>
            </ClanderBtn>
          </div>
        )}

        <div className="behind" ref={divRef}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/infos" component={Infos} />
              <Route path="/user" component={User} />
              <Route path="/register" component={Register} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
        </div>

        <CSSTransition
          in={wheel}
          classNames={"bContainer"}
          timeout={300}
          unmountOnExit
        >
          <Footer>
            <InfoBtn>
              <button>{homeInfos[cnumber].info}</button>
            </InfoBtn>
            <DownBtn
              onClick={() => {
                setwheel(false);
              }}
            >
              <ArrowDownOutlined />
            </DownBtn>
            <Space />
          </Footer>
        </CSSTransition>

        <div className="bottom">Made by balduck @2021 兴趣开放实验室</div>
      </div>
    </>
  );
}

const TransationContainer = styled.div`
  .cContainer {
    height: 100vh;
    width: 100vw;
    li {
      background-color: ${basicColor};
    }
  }
  .cContainer-enter {
    overflow: hidden;
    height: 0vh;
  }

  .cContainer-enter-active {
    height: 100vh;
    transition: 300ms;
  }
  .cContainer-exit {
    height: 100vh;
  }
  .cContainer-exit-active {
    height: 7.48rem;
    transition: 300ms;
    overflow: hidden;
  }
  .cContainer-exit-done {
    height: 7.48rem;
    overflow: hidden;
  }
`;

const cBtnSize = 20;

const ClanderBtn = styled.button`
  width: ${cBtnSize}rem;
  height: ${cBtnSize}rem;
  top: 50vh;
  right: 0;
  z-index: 999;
  background: transparent;
  position: absolute;
  margin-top: -${cBtnSize / 2}rem;
  margin-right: -${cBtnSize / 2}rem;
  border: 2px solid ${basicColor};
  border-radius: ${cBtnSize / 2}rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: left;
    justify-content: flex-end;
    flex-direction: column;
    color: ${basicColor};
    font-family: FZYaoTi;
    font-size: 5rem;
    display: flex;
    width: ${(cBtnSize * 2) / 3}rem;
  }
`;

const Line = styled.div`
  width: ${cBtnSize / 3}rem;
  height: 2px;
  background-color: ${basicColor};
`;

const dBtnSize = 5;
const DownBtn = styled.button`
  margin-left: -${dBtnSize / 2}rem;
  width: ${dBtnSize}rem;
  height: ${dBtnSize}rem;
  font-size: ${dBtnSize / 2}rem;
  color: ${basicColor};
`;

const Footer = styled.div`
  bottom: 0;
  position: absolute;
  display: flex;
  padding: 0 5rem;
  justify-content: stretch;
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  height: 7.48rem;
  width: 100vw;
`;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 9999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const InfoBtn = styled.div`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  font-size: 2rem;
  flex: 1;
`;

const Space = styled.div`
  flex: 1;
`;
