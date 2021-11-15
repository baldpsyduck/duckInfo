import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import { useState } from "react";

import MyComment from "./MyComment";

import { comments as initalC } from "config/comments";
import { useAppSelector } from "store/hooks";
import { comment } from "types/comment";

const { TextArea } = Input;

const CommentList = ({comments}: { comments: any }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={(props: comment) => <MyComment {...props} />}
  />
);

const Editor = (props: {
  onChange: Function;
  onSubmit: Function;
  submitting: boolean;
  value: string;
}) => (
  <>
    <Form.Item>
      <TextArea
        rows={4}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={props.submitting}
        onClick={() => props.onSubmit()}
        type="primary"
      >
        发表
      </Button>
    </Form.Item>
  </>
);

export default function CList({comments}:{ comments:comment[]}) {
  const userName = useAppSelector((store) => store.me.data.username);

  const [coms, setcoms] = useState<Array<{}>>(comments);
  const [submitting, setsubmitting] = useState<boolean>(false);
  const [value, setvalue] = useState<string>("");

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setsubmitting(true);

    setTimeout(() => {
      setsubmitting(false);
      setvalue("");
      setcoms([
        {
          author: userName,
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{value}</p>,
          date: moment().calendar(),
          likes: 0,
          dislikes: 0,
          comments: 0,
        },
        ...coms||[],
      ]);
    }, 1000);
  };

  const handleChange = (e: any) => {
    setvalue(e.target.value);
  };

  return (
    <>
      {userName && (
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      )}
      {(coms||[]).length > 0 && <CommentList comments={coms} />}
    </>
  );
}
