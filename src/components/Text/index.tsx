import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";
import styled from "@emotion/styled";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import { nanoid } from "nanoid";
import { data as inidata } from "config/info";
import { message } from "antd";

import { useEffect, useMemo, useState } from "react";

const SaveBtn = ({ onClick }: { onClick?: (e: any) => void }) => {
  return (
    <SaveContainer>
      <SaveButton onClick={onClick}>
        <SaveOutlined />
      </SaveButton>
    </SaveContainer>
  );
};

export const TextR = ({ data }: { data: string }) => {
  const id: string = nanoid();
  let nonedata: { innerHTML: string } = { innerHTML: "" };
  useEffect(() => {
    document.getElementById(id) !== null &&
      ((document.getElementById(id) || nonedata).innerHTML = data || inidata);
  }, []);

  return <div id={id}></div>;
};

TextR.defaultPrpos = {
  data: "",
};

interface TextRTypes {
  title?: string;
}

export const TextW = (props: TextRTypes) => {
  const { title } = props;

  const [data, setdata] = useState("");

  const handleEditorChange = (e: any) => {
    setdata(e.toHTML());
    console.log(e.toHTML());
  };

  const submitContent = (e:any) => {
    message.success("duckinfo已为你自动保存");
    setdata(e.toHTML())
    const head = `<h1 style="text-align:center;" size="5" _root="[object Object]" __ownerid="undefined" __hash="undefined" __altered="false">${title}</h1>`;
    const reg = new RegExp(`^<h[0-9][^>]*>(<[^>]*>)*${title}`);
    title && data.search(reg) === -1 && setdata(head + data);
  };

  return (
    <>
      <Container>
        <BraftEditor
          value={BraftEditor.createEditorState(data)}
          onChange={handleEditorChange}
          onSave={submitContent}
          defaultValue={BraftEditor.createEditorState(inidata)}
          className="editor"
          contentClassName="editorC"
          controlBarClassName="editorB"
          extendControls={[
            "separator",
            {
              key: "保存",
              type: "button",
              text: "预览",
            },
          ]}
        />
      </Container>
    </>
  );
};

TextW.defaultPrpos = {
  title: "",
};

const Container = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  flex: auto;
  .editor {
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: stretch;

    .editorB {
      flex: 1fr;
    }

    .editorC {
      flex: auto;
    }
  }
`;

const SaveContainer = styled.div`
  height: 4.5rem;
  width: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SaveButton = styled.button`
  height: 3.2rem;
  width: 3.2rem;
  :hover {
    background-color: #e4e6e9;
  }
`;
