import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;

export const AboutMe = ({
  description,
  authority,
  isMe,
}: {
  description: string;
  authority: number;
  isMe: boolean;
}) => {
  const [change, setchange] = useState<boolean>(false);
  const [des, setdes] = useState<string>(description);

  return (
    <Container>
      <Title>关于我</Title>
      {change ? (
        <TextArea
          defaultValue={des}
          autoSize
          onBlur={() => {
            setchange(false);
          }}
          onPressEnter={(e) => {
            setdes(e.currentTarget.value);
            setchange(false);
          }}
        />
      ) : (
        <Text
          onClick={() => {
            setchange(isMe);
          }}
        >
          {des}
        </Text>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-family: "华文中宋", monospace;
`;

const Text = styled.div`
  margin: 0.8rem 0.2rem;
  font-size: 1.4rem;
  color: #a0a0a0;
  word-wrap: break-word;
`;

const UserTagContainer = styled.div`
  margin: 2rem 0;
`;

const UserTag = styled.span`
  font-size: 1.6rem;
  font-family: "华文中宋", monospace;
  background-color: #a4deff;
  padding: 0.6rem 1rem;
  margin: 0.3rem 0.5rem;
`;
