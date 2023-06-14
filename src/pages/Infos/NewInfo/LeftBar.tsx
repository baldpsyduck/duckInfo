import styled from "@emotion/styled";
import { Switch, Input, Button, DatePicker, TimePicker } from "antd";
import UpIMG from "components/UpIMG";
import { LeftOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  updateBackground,
  updateTitle,
  updateShowPic,
} from "store/features/infoWSlice";
import { updateDate } from "store/features/infoWSlice";
import moment from "moment";
import "./LeftBar.css";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

export default function LeftBar({
  settitle,
  setneedTitle,
  setpre,
  pre,
  onFinish,
}: {
  settitle: (e: string) => void;
  setneedTitle: (e: boolean) => void;
  setpre: (e: boolean) => void;
  pre: boolean;
  onFinish?: (
    title: string,
    showPic: string,
    start: string,
    end: string
  ) => void;
}) {
  const [rotate, setrotate] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const iniinfo = useAppSelector((store) => store.infoW);
  const { background, showPic, title, start, end } = iniinfo;

  useEffect(() => {
    dispatch(
      updateDate([moment().format(dateFormat), moment().format(dateFormat)])
    );
  }, []);

  return (
    <>
      <ContainerStyle />
      <Container className={rotate ? "activeNIL" : ""}>
        <ShowBtnContainer>
          <ShowBtn
            onClick={() => {
              setrotate(!rotate);
              return false;
            }}
          >
            <IconContainer className={rotate ? "active" : ""}>
              <LeftOutlined />
            </IconContainer>
          </ShowBtn>
        </ShowBtnContainer>
        <Input
          onChange={(e) => {
            settitle(e.target.value);
            dispatch(updateTitle(e.target.value));
          }}
          defaultValue={title}
          placeholder="请输入文章标题"
        />
        <BtnContainer>
          标题映射到文本&nbsp;
          <Switch
            onChange={(e) => {
              setneedTitle(e);
            }}
            defaultChecked
          />
        </BtnContainer>
        <UpIMG
          defaultValue={showPic}
          desText="请上传展示图片"
          imgFunc={(e) => {
            dispatch(updateShowPic(e));
          }}
        />
        <UpIMG
          defaultValue={background}
          imgFunc={(e) => {
            dispatch(updateBackground(e));
          }}
          delFunc={() => {
            dispatch(updateBackground(""));
          }}
          desText="请上传背景图片"
        />
        <span>活动开始/结束日期</span>
        <TimeChooser
          className="myTimeChoose"
          defaultValue={
            start && end
              ? [moment(start, dateFormat), moment(end, dateFormat)]
              : [moment(moment(), dateFormat), moment(moment(), dateFormat)]
          }
          onChange={(e) => {
            e &&
              dispatch(
                updateDate([
                  (e[0] || moment()).format(dateFormat),
                  (e[1] || moment()).format(dateFormat),
                ])
              );
          }}
        />
        <BottomBtn>
          <Button
            onClick={() => {
              onFinish && onFinish(title, showPic || "", start, end);
            }}
          >
            提交
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setrotate(false);
              setpre(!pre);
            }}
          >
            {pre ? "取消预览" : "预览"}
          </Button>
        </BottomBtn>
      </Container>
    </>
  );
}

const TimeChooser = styled(RangePicker)`
  input {
    font-size: 0.3rem;
  }
`;

const BottomBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const BtnContainer = styled.div`
  font-family: Microsoft JhengHei;
  display: flex;
  justify-content: center;
`;

const ShowBtn = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 7rem;
  width: 7rem;
  border-radius: 7rem;
  margin-left: -4.5rem;
  z-index: 0;
  border: 1px solid #c0c0c0;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const ShowBtnContainer = styled.div`
  height: 7rem;
  width: 3.5rem;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -3.5rem;
  margin-right: -3.5rem;
  overflow: hidden;

  .active {
    transition: 300ms;
    transform: rotate(180deg);
  }
`;

const IconContainer = styled.div`
  transition: 500ms;
  margin-right: 0.6rem;
`;

const Container = styled.div`
  height: 50rem;
  width: 20rem;
  transition: 500ms;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1.5rem;
  padding: 2rem;
  position: fixed;
  border: 1px solid #c0c0c0;
  border-radius: 0 5px 5px 0;
  margin-top: -25rem;
  background-color: white;
  left: 0;
  top: 50%;
  z-index: 999;
`;

const ContainerStyle = styled.div`
  + .activeNIL {
    transition: 300ms;
    left: -20rem;
  }
`;
