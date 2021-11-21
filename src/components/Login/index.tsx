import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import MoveDiv from "components/MoveDiv";

import { useAppDispatch } from "store/hooks";
import { updateMe } from "store/features/meSlice";
import { changeLogin } from "store/features/loginSlice";
import "./Login.css";
import styled from "@emotion/styled";

import cookie from 'react-cookies'
import { userLogin } from "api";

export default function Login() {
  const [error, seterror] = useState("");

  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    userLogin(values)
      .then((e) => {
        const res=e.data;
        dispatch(updateMe(res));
        dispatch(changeLogin(false));
      })
      .catch((err) => seterror(err.message));
  };

  return (
    <LoginOuter className="loginOuter loginContainer" bubbles={false}>
      <button className="close" onClick={() => dispatch(changeLogin(false))}>
        <CloseOutlined />
      </button>

      <div className="form">
        <Logo className="logo" />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名！" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {error && <ErrorSpan>{error}</ErrorSpan>}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Link className="login-form-forgot" to="/home">
              忘记密码？
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="login-form-forgot" to="/register">
              <span onClick={() => dispatch(changeLogin(false))}>
                立即注册！
              </span>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </LoginOuter>
  );
}

const ErrorSpan = styled.span`
  color: "red";
`;

const LoginOuter = styled(MoveDiv)`
  width: 30rem;
  border: 1px solid #fff;
  background: white;
  box-shadow: 0px 0px 50px rgba(192, 192, 192, 0.3);
  pointer-events: auto;
`;

const Logo = styled.div`
  width: 84px;
  height: 84px;
`;
