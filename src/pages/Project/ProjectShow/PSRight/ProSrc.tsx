import styled from "@emotion/styled";
import { Alert, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TitleBar from "components/TitleBar";
import { useState } from "react";

export default function ProSrc(props: { isLeader: boolean; links?: string[] }) {
  const [input, setinput] = useState<boolean>(false);
  const [links, setlinks] = useState<string[]>(props.links || []);

  const { isLeader } = props;

  let changeLink = [...links];

  return (
    <>
      <TitleBar
        title
        lcChild="项目主页"
        size={20}
        button={isLeader}
        rcChild={isLeader ? (input ? "取消" : "编辑") : ""}
        onBtnClick={() => {
          setinput(!input);
        }}
      />
      <LinksContainer className="linksContainer">
        {links.map((link, index) => {
          if (link.trim() === "" && !input) {
            changeLink.splice(index, 1);
            setlinks(changeLink);
          }
          return (
            <div key={index}>
              {input ? (
                <LinkInput
                  bordered={false}
                  defaultValue={link}
                  maxLength={100}
                  placeholder="请输入网址"
                  onChange={(e: any) => {
                    changeLink.splice(index, 1, e.target.value || "");
                  }}
                />
              ) : (
                <Link href={link}>
                  <LinkContainer>{link}</LinkContainer>
                </Link>
              )}
            </div>
          );
        })}
        {input && (
          <>
            <Button
              type="dashed"
              onClick={() => {
                setlinks([...links, ""]);
              }}
              style={{ width: "100%", marginBottom: "5px" }}
              icon={<PlusOutlined />}
            >
              添加网页
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setlinks(changeLink);
                setinput(false);
              }}
              block
            >
              确定
            </Button>
          </>
        )}
      </LinksContainer>
    </>
  );
}

const Link = styled.a`
  font-size: 15px;
  line-height: 42px;
  font-weight: 500;
`;

const LinkContainer = styled.div`
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`;

const LinkInput = styled(Input)`
  font-size: 15px;
  line-height: 42px;
  font-weight: 500;
`;

const LinksContainer = styled.div`
  width: 100%;
`;
