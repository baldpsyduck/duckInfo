import { Select,  Input, Tag, message, TagProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "@emotion/styled";
import { useAppDispatch } from "store/hooks";
import { pushTags, delTags } from "store/features/projectSlice";
import { getArrayDiff } from "utils/getArrayDiff";

const { Option } = Select;
const tags = ["招募队友", "创新项目评审", "黑客松项目"];

let index = 0;

interface myTagType extends TagProps {
  tags: string[];
  children: string;
}

const MyTag = (props: myTagType) => {
  const [select, setselect] = useState<boolean>(
    props.tags.indexOf(props.children) !== -1
  );

  const dispatch = useAppDispatch();

  const PointerTag = styled(Tag)`
    cursor: pointer;
  `;

  return (
    <PointerTag
      {...props}
      onClick={() => {
        select
          ? dispatch(delTags(`${props.children}`))
          : dispatch(pushTags(`${props.children}`));
        setselect(!select);
      }}
      color={`${select ? "green" : props.color || "blue"}`}
    >
      {props.children}
      {select && "  √"}
    </PointerTag>
  );
};

export default function AddTags(props: { proTags: string[] }) {
  const [items, setitems] = useState<string[]>(["前端", "后端", "人工智能"]);
  const [name, setname] = useState<string>("");

  const dispatch = useAppDispatch();

  const onNameChange = (event: any) => {
    setname(event.target.value);
  };

  const addItem = () => {
    tags.indexOf(name) !== -1 || items.indexOf(name) !== -1
      ? message.error("该标签已存在")
      : setitems([name || `New item ${index++}`, ...items]);
    setname("");
  };

  return (
    <Conatiner>
      <Head>
        <Title>项目类型：</Title>
        <div>
          {tags.map((tag) => {
            return (
              <MyTag key={tag} tags={props.proTags}>
                {tag}
              </MyTag>
            );
          })}
        </div>
      </Head>
      <Bottom>
        <Title>项目标签：</Title>
        <Select
          mode="multiple"
          allowClear
          defaultValue={getArrayDiff(props.proTags, tags)}
          style={{ width: "100%" }}
          onSelect={(e: string) => {
            dispatch(pushTags(e));
          }}
          onDeselect={(e: string) => {
            dispatch(delTags(e));
          }}
          placeholder="请选择项目标签"
          dropdownRender={(menu) => (
            <div>
              <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
                <Input
                  style={{ flex: "auto" }}
                  value={name}
                  onChange={onNameChange}
                />
                <a
                  style={{
                    flex: "none",
                    padding: "8px",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={addItem}
                >
                  <PlusOutlined /> 添加自定义标签
                </a>
              </div>
              {menu}
            </div>
          )}
        >
          {items.map((item) => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Bottom>
    </Conatiner>
  );
}

const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: #c0c0c0;
  margin-bottom: 16px;
`;

const Conatiner = styled.div`
  padding: 16px;
`;
