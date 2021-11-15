import { Form, Input, Button, Space, Select, Alert } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { setMem } from "store/features/projectSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { members } from "types/project";

import styled from "@emotion/styled";
import { useState } from "react";

const { Option } = Select;

export default function NPMembers() {
  const [alert, setalert] = useState<boolean>(false);

  const username = useAppSelector((store) => store.me.data.username);

  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    let members: members = [{ username: username, role: "leader" }];

    (values.members || []).map((val: any) => {
      val.username.map((username: string) => {
        members.push({ username: username, role: val.role });
      });
    });

    dispatch(setMem(members));
  };

  return (
    <Container
      className="NPMembersContainer"
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.List name="members">
        {(fields, { add, remove }) => (
          <>
            <Space align="baseline">
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.area !== curValues.area ||
                  prevValues.sights !== curValues.sights
                }
              >
                {() => (
                  <Form.Item isListField={true} label="职务">
                    <Input defaultValue={"leader"} disabled />
                  </Form.Item>
                )}
              </Form.Item>
              <Form.Item isListField={true} label="人员">
                <UserSelector
                  style={{ width: "20vw" }}
                  mode="multiple"
                  placeholder="请选择人员"
                  defaultValue={username}
                  disabled
                />
              </Form.Item>
            </Space>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area ||
                    prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label="职务"
                      name={[field.name, "role"]}
                      fieldKey={[field.fieldKey, "role"]}
                      rules={[{ required: true, message: "请填写职务" }]}
                    >
                      <Input
                        placeholder="请填写职务"
                        onChange={() => setalert(true)}
                      />
                    </Form.Item>
                  )}
                </Form.Item>
                <Form.Item
                  {...field}
                  label="人员"
                  name={[field.name, "username"]}
                  fieldKey={[field.fieldKey, "username"]}
                  rules={[{ required: true, message: "请填写对应人员" }]}
                >
                  <UserSelector
                    style={{ width: "20vw" }}
                    mode="multiple"
                    placeholder="请选择人员"
                    onClick={() => {
                      setalert(true);
                    }}
                  >
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                    <Option value="white">Blue</Option>
                    <Option value="2">Blue</Option>
                    <Option value="3">Blue</Option>
                  </UserSelector>
                </Form.Item>

                <MinusCircleOutlined
                  onClick={() => {
                    setalert(true);
                    remove(field.name);
                  }}
                />
              </Space>
            ))}

            <Form.Item>
              <AddBtn
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                添加职位
              </AddBtn>
            </Form.Item>
          </>
        )}
      </Form.List>
      {alert && (
        <Alert
          message="请在更新该表单后点击确定"
          type="info"
          showIcon
          style={{ marginBottom: "15px" }}
        />
      )}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            setalert(false);
          }}
        >
          确定
        </Button>
      </Form.Item>
    </Container>
  );
}

const Container = styled(Form)`
  width: 50vw;
`;

const UserSelector = styled(Select)`
  width: 20vw;
`;

const AddBtn = styled(Button)`
  width: 40vw;
`;
