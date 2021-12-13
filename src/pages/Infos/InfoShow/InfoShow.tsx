import styled from "@emotion/styled";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { TextR } from "components/Text";
import { StarOutlined } from "@ant-design/icons";
import { info } from "config/info";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { updateInfoW } from "store/features/infoWSlice";

export default function InfoShow() {
  const username = useAppSelector((store) => store.me.data.username);
  const { authID, data, background, id } = info;
  const dispatch = useAppDispatch();

  return (
    <Container>
      <RightBar>
        <Couple>
          <MyLink to={`/user/me/${authID}`}>
            <Avatar />
          </MyLink>
          <MyLink to={`/user/me/${authID}`}>{authID}</MyLink>
        </Couple>
        <Couple>
          <Star>
            <StarOutlined />
          </Star>
          <span>{"收藏"}</span>
        </Couple>

        {authID === username && (
          <Button type="primary" onClick={() => dispatch(updateInfoW(info))}>
            <MyLink to={`/infos/new/?id=${id}`}>修改</MyLink>
          </Button>
        )}
      </RightBar>
      <Article>
        <TextR data={data} />
      </Article>
      {background && <Background src={background} alt="" />}
    </Container>
  );
}

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
  width: 10rem;
  margin-top: -12.5rem;
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
