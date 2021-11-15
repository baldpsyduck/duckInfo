import styled from "@emotion/styled";
import { Button, Input } from "antd";
import Tag from "components/Tag";
import TitleBar from "components/TitleBar";
import { useMemo, useState } from "react";
import PulldownDiv from "components/PulldownDiv";
import Tags from "components/AddTags";
import { useAppSelector } from "store/hooks";

interface propsType {
  description: string;
  isLeader: boolean;
  tags: string[];
}

export default function ProDes(props: propsType) {
  const [input, setinput] = useState<boolean>(false);
  const [description, setdescription] = useState<string>(props.description);
  const { isLeader } = props;

  const tags = useAppSelector((store) => store.project.tags);

  useMemo(() => {
    setdescription(props.description);
  }, [props.description]);

  let text: string = description;

  return (
    <>
      <TitleBar
        title={true}
        lcChild="项目简介"
        size={20}
        button={isLeader}
        rcChild={isLeader ? (input ? "取消" : "编辑") : ""}
        onBtnClick={() => {
          setinput(!input);
        }}
      />
      {input ? (
        <MyInput
          defaultValue={description}
          maxLength={100}
          onChange={(e) => {
            text = e.target.value;
          }}
        />
      ) : (
        <Introduce className="introduce">{description}</Introduce>
      )}
      <div className="tagsContainer">
        {tags.map((tag) => {
          return <Tag>{tag}</Tag>;
        })}
      </div>
      <br />
      {input && (
        <>
          <PulldownDiv dropdownOverlay={<Tags proTags={tags} />} />
          <br />
          <Button
            type="primary"
            onClick={() => {
              setdescription(text);
              setinput(false);
            }}
            block
          >
            确定
          </Button>
        </>
      )}
    </>
  );
}

const MyInput = styled(Input.TextArea)`
  font-size: 20px;
  line-height: 42px;
  font-weight: 500;
  word-wrap: break-word;
  height: auto;
`;

const Introduce = styled.div`
  font-size: 20px;
  line-height: 42px;
  font-weight: 500;
  word-wrap: break-word;
`;

const Btn = styled.button`
  margin-left: 5px;
`;
