import styled from "@emotion/styled";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { userChangeP, userGetFV } from "api";
import logo from "assets/img/logo.png";

export default function Forget({
  className,
  setback,
}: {
  className?: string;
  setback?: (e: boolean) => void;
}) {
  const [error, seterror] = useState("");
  const [email, setemail] = useState("");
  const [verify, setverify] = useState("");
  const [next, setnext] = useState(false);

  const onFinish = (e: any) => {
    setverify(e.verify)
    userChangeP(e)
      .then((e) => {
        setnext(true);
      })
      .catch((e) => {
        seterror(e.response.data.message);
      });
  };

  const onFinish2 = (e: any) => {
    userChangeP({...e,verify:verify,email:email})
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        seterror(e.response.data.message);
      });
  };

  return (
    <>
      <Container className={className ? className : ""}>
        <BackBtn>
          <button
            onClick={() => {
              setback && setback(false);
            }}
          >
            <LeftOutlined />
          </button>
        </BackBtn>
        {next ? (
            <FormContainer>
              <Logo src={logo} />
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish2}
              >
                <Form.Item
                  name="password"
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
                  <Input.Password placeholder="密码" />
                </Form.Item>

                <Form.Item
                  name="confirm"
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
                  <Input.Password placeholder="确认密码" />
                </Form.Item>

                {error && (
                  <Form.Item>
                    <ErrorSpan>{error}</ErrorSpan>{" "}
                  </Form.Item>
                )}

                <Form.Item>
                  <NextBtn
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    完成
                  </NextBtn>
                </Form.Item>
              </Form>
            </FormContainer>
        ) : (
          <FormContainer>
            <Logo src={logo} />
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: "请输入邮箱！" }]}
              >
                <Input
                  onChange={(e) => {
                    setemail(e.currentTarget.value);
                  }}
                  placeholder="请输入邮箱"
                />
              </Form.Item>

              <Form.Item>
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="verify"
                      rules={[{ required: true, message: "请输入验证码！" }]}
                    >
                      <Input placeholder="验证码" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button
                      onClick={() => {
                        userGetFV(email);
                      }}
                    >
                      获取验证码
                    </Button>
                  </Col>
                </Row>
              </Form.Item>

              {error && (
                <Form.Item>
                  <ErrorSpan>{error}</ErrorSpan>{" "}
                </Form.Item>
              )}

              <Form.Item>
                <NextBtn
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  下一步
                </NextBtn>
              </Form.Item>
            </Form>
          </FormContainer>
        )}
      </Container>
    </>
  );
}

const NextBtn = styled(Button)`
  width: 100%;
`;

const Logo = styled.img`
  width: 84px;
  height: 84px;
`;

const FormContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;
`;

const ErrorSpan = styled.span`
  color: red;
`;

const BackBtn = styled.div`
  position: absolute;
  padding-left: 1rem;
  top: 50%;
`;

const Container = styled.div`
  overflow: hidden;
  width: 0%;
  height: 100%;
  background-color: white;
  position: absolute;
  transition: 300ms;
  right: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
