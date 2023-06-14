import styled from "@emotion/styled";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { TextR } from "components/Text";
import { StarOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";
import { updateInfoW } from "store/features/infoWSlice";
import { info as infoT } from "types/inform";
import infoS from "assets/img/info.jpg";
import { useHistory } from "react-router";

interface ISProps extends RouteComponentProps {}

export default function InfoShow(props: ISProps) {
  const username = useAppSelector((store) => store.me.data.username);
  const params: any = props.match.params;
  const infos = useAppSelector((store) => store.infos.data);
  const info: infoT = infos.filter((info) => {
    return info.id === params.infoID;
  })[0];
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <>
      {!info?(
        <Result
          status="404"
          title="404"
          subTitle="当前通知不存在"
          extra={
            <Button
              type="primary"
              onClick={() => {
                history.goBack();
              }}
            >
              返回
            </Button>
          }
        />
      ) :<Container>
        <RightBar>
          <Couple>
            <ShowIMG src={info.showPic || infoS} alt="" />
            <span>{info.title}</span>
          </Couple>
          <Couple>
            <MyLink to={`/user/me/${info.authID}`}>
              <Avatar />
            </MyLink>
            <MyLink to={`/user/me/${info.authID}`}>{info.authID}</MyLink>
          </Couple>
          <Couple>
            <span>活动日期:</span>
            <span>{info.start + "-"}</span>
            <span>{info.end}</span>
          </Couple>
          <Couple>
            <Star>
              <StarOutlined />
            </Star>
            <span>{"收藏"}</span>
          </Couple>

          {info.authID === username && (
            <Button type="primary" onClick={() => dispatch(updateInfoW(info))}>
              <MyLink to={`/infos/new?id=${info.id}`}>修改</MyLink>
            </Button>
          )}
        </RightBar>
        <Article>
          <TextR data={info.data} />
        </Article>
        {info.background && <Background src={info.background} alt="" />}
      </Container>}
    </>
  );
}

const ShowIMG = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const MyLink = styled(Link)`
  color: black;
  :hover {
    color: black;
  }
`;

const Couple = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ABeeZee;
`;

const Star = styled.button`
  font-size: 3rem;
`;

const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  background: black;
`;

const RightBar = styled.div`
  width: 12rem;
  margin-top: -20rem;
  border: 1px solid #c0c0c0;
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1rem 0 0 1rem;
  grid-gap: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  position: absolute;
  z-index: 999;
  overflow: hidden;
  position: relative;
`;

const Article = styled.div`
  padding: 3rem;
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  overflow: auto;
  width: 80%;
`;

const Background = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
