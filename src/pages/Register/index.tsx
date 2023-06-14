import { Form, Input, Button, PageHeader, Result, Row, Col } from "antd";
import { useHistory } from "react-router";

import { useAppDispatch } from "store/hooks";
import { updateMe } from "store/features/meSlice";
import { updateUser } from "store/features/userSlice";
import "./Register.css";
import { useState } from "react";
import styled from "@emotion/styled";

import { userGetV, userRegist } from "api";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function Register() {
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<boolean>(false);
  const [email, setemail] = useState<string>("");

  const history = useHistory();

  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    const { confirm, agreement, studentId, ...data } = values;

    const stuID = studentId || "";

    const info = { ...data, studentId: stuID };

    userRegist(info)
      .then((res) => {
        dispatch(updateMe(info));
        dispatch(updateUser(info));
        setsuccess(true);
        setTimeout(() => {
          history.replace(`/user/me/${values.username}`);
        }, 3000);
      })
      .catch((err) => {
        seterror(err.response.data.message);
      });
  };

  const [form] = Form.useForm();

  return (
    <Container className="registerOuter">
      {success ? (
        <Result status="success" title="注册成功!" subTitle="3秒后自动跳转" />
      ) : (
        <>
          <div className="header">
            <PageHeader
              className="site-page-header"
              onBack={() => history.goBack()}
              title=" "
            />
          </div>

          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            className="formOuter"
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[
                {
                  required: true,
                  message: "请输入你的用户名！",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="邮箱"
              rules={[
                {
                  type: "email",
                  message: "邮箱格式不正确！",
                },
                {
                  required: true,
                  message: "请输入你的邮箱！",
                  whitespace: true,
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item name="realname" label="真实姓名">
              <Input />
            </Form.Item>

            <Form.Item name="studentId" label="学工号">
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: "请输入密码！",
                },
                () => ({
                  validator(_, value) {
                    if (value.length < 5 || value.length > 32) {
                      return Promise.reject(
                        new Error("密码长度需保持在5~32之间")
                      );
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "请确认你的密码！",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("两次密码不同！"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label="验证码" extra="请检查你的邮箱以获取验证码">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="verify"
                    rules={[{ required: true, message: "请输入验证码！" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button
                    onClick={() => {
                      userGetV(email);
                    }}
                  >
                    获取验证码
                  </Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              {error && <ErrorText>{error}</ErrorText>}
            </Form.Item>
          </Form>
        </>
      )}
    </Container>
  );
}

const VContainer = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  .formitem {
    flex: auto;
  }
  button {
    flex: 1fr;
  }
`;

const ErrorText = styled.span`
  color: red;
  margin-left: 5px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
