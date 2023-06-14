import styled from "@emotion/styled";
import { Input } from "antd";
import { userUpdate } from "api";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateMe } from "store/features/meSlice";
import { updateUser } from "store/features/userSlice";

const { TextArea } = Input;

export const AboutMe = ({
  authority,
  isMe,
  username,
  nickname,
}: {
  authority: number;
  isMe: boolean;
  username: string;
  nickname: string;
}) => {
  const [change, setchange] = useState<boolean>(false);
  const [des, setdes] = useState<string>("");
  const dispatch = useAppDispatch();
  const me = useAppSelector((store) => store.me.data);
  const user = useAppSelector((store) => store.user.data);

  useMemo(() => {
    setdes(user.description||"")
  }, [user.description])

  return (
    <Container>
      <Title>关于我</Title>
      {change ? (
        <TextArea
          defaultValue={des}
          autoSize
          onBlur={(e) => {
            setdes(e.currentTarget.value);
            dispatch(updateMe({ ...me, description: e.currentTarget.value }));
            dispatch(updateUser({ ...user, description: e.currentTarget.value }));
            userUpdate({ username, nickname, description: e.currentTarget.value });
            setchange(false);
          }}
          onPressEnter={(e) => {
            setdes(e.currentTarget.value);
            dispatch(updateMe({ ...me, description: e.currentTarget.value }));
            dispatch(updateUser({ ...user, description: e.currentTarget.value }));
            userUpdate({ username, nickname, description: e.currentTarget.value });
            setchange(false);
          }}
        />
      ) : (
        <Text
          onClick={() => {
            setchange(isMe);
          }}
        >
          {des || "该用户目前还没有设置信息~"}
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
