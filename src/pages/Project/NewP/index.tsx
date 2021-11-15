import { ReactChild, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  DatePicker,
  Form,
  Input,
  Button,
  PageHeader,
  Result,
  Select,
} from "antd";

import PulldownDiv from "components/PulldownDiv";
import styled from "@emotion/styled";

import { clearTree, setMem, setTags } from "store/features/projectSlice";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { project } from "types/project";
import NPMembers from "./NPMembers";
import ProjectTreeCard from "./ProjectTreeCard";
import MoveDiv from "components/MoveDiv";
import Tags from "components/AddTags";

import { proRegist } from "api";

const { Option } = Select;
const children: [ReactChild] = [
  <div
    onClick={(e) => {
      e.preventDefault();
    }}
  >
    {<Input />}
  </div>,
];

for (let i = 10; i < 36; i++) {
  children.push(
    <Option value={i} key={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  );
}

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function NewP() {
  const username = useAppSelector((store) => store.me.data.username);
  const { members, projectTree, tags } = useAppSelector(
    (store) => store.project
  );

  const [visible, setvisible] = useState<boolean>(false);
  const [finish, setfinish] = useState<boolean>(false);

  const history = useHistory();

  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const onFinish = (values:any) => {

    const {date,...data}=values;

    const info: project = {
      ...data,
      members: members,
      projectTree: projectTree,
      tags: tags, 
      startAt:date[0].format('YYYY/MM/DD'), 
      endAt:date[1].format('YYYY/MM/DD'), 
    };

    proRegist(info)
      .then(() => {
        setfinish(true);
        setTimeout(() => {
          history.goBack();
        }, 3000);
      })
      .catch();
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChange = () => {
    setvisible(true);
  };

  useEffect(() => {
    dispatch(clearTree());
    dispatch(setTags([]));
    dispatch(setMem([{ username: username, role: "leader" }]));
  }, [username]);

  return (
    <Container className="newPro">
      {finish ? (
        <Result status="success" title="项目创建成功！" subTitle="3s后将跳转" />
      ) : (
        <>
          <PageHeader
            className="site-page-header"
            onBack={() => history.goBack()}
            title=" "
          />
          {username ? (
            <NPForm
              form={form}
              className="newProForm"
              name="control-hooks"
              onFinish={onFinish}
            >
              <div className="formInner">
                <Form.Item
                  name="name"
                  label="项目名称"
                  rules={[{ required: true, message: "请输入项目名称" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="members" label="团队分工">
                  <PulldownDiv dropdownOverlay={<NPMembers />} />
                </Form.Item>
                <Form.Item
                  name="date"
                  label="项目开始及结束时间"
                  rules={[{ required: true, message: "请填写时间" }]}
                >
                  <RangePicker />
                </Form.Item>
                <Form.Item name="tags" label="项目标签">
                  <PulldownDiv dropdownOverlay={<Tags proTags={[]} />} />
                </Form.Item>
                <Form.Item name="projectTree" label="项目节点">
                  <Button type="primary" onClick={onChange}>
                    编辑节点
                  </Button>
                </Form.Item>
                <Form.Item
                  name="description"
                  label="项目简介"
                  rules={[{ required: true, message: "请填写项目简介" }]}
                >
                  <TextArea
                    placeholder="请输入项目简介"
                    allowClear
                    maxLength={100}
                    showCount
                  />
                </Form.Item>
              </div>
              <div className="formBtn">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    重置
                  </Button>
                </Form.Item>
              </div>
            </NPForm>
          ) : (
            <Result
              status="403"
              title="您无权访问此界面"
              subTitle="请登录后重试"
            />
          )}
          {visible && (
            <PTContainer>
              <PageHeader
                className="site-page-header"
                onBack={() => setvisible(false)}
                title=" "
                style={{ width: "7rem" }}
              />
              <ProjectTreeCard />
            </PTContainer>
          )}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  height: 100%;
`;

const NPForm = styled(Form)`
  width: 60%;
  height: 100%;
`;

const PTContainer = styled(MoveDiv)`
  width: 50%;
  height: 90%;
  background-color: white;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 10%;
`;
