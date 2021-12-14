import styled from "@emotion/styled";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import { nanoid } from "nanoid";
import { data as inidata } from "config/info";
import { message } from "antd";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateData } from "store/features/infoWSlice";

import { useEffect, useMemo, useState } from "react";

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
  needTitle?: boolean;
  onChange?: (e:any) => void;
}

export const TextW = (props: TextRTypes) => {
  const dispatch = useAppDispatch();
  const inidata = useAppSelector((store) => store.infoW.data);

  const { title, needTitle, onChange } = props;

  const [data, setdata] = useState(inidata);
  const [flag, setflag] = useState(false);
  useMemo(() => {
    setflag(true);
    if (needTitle) {
      const head = `<h1 style="text-align:center;" size="5" _root= "[object Object]" __ownerid="undefined" __hash="undefined" __altered="false">${title}</h1>`;
      const reg = new RegExp(
        `^<h[0-9][^>]*>(<[^>]*>)*${title}(</[^>]*>)*</h[0-9]>`
      );

      const tit = new RegExp(
        `^(<h[0-9][^>]*>(<[^>]*>)*)([^<]*)((</[^>]*>)*</h[0-9]>)`
      );
      const content = data.split(tit);
      title &&
        data.search(reg) === -1 &&
        setdata(data.replace(tit, `$1${title}$4`));
      data.search(tit) === -1 && setdata(head + content[content.length - 1]);
    } else {
      const tit = new RegExp(`^<h[0-9][^>]*>(<[^>]*>)*.*(</[^>]*>)*</h[0-9]>`);
      const content = data.split(tit);
      setdata(content[content.length - 1]);
    }
  }, [title, needTitle]);

  const handleEditorChange = (e: any) => {
    setflag(false);
    setdata(e.toHTML());
    dispatch(updateData(e.toHTML()));
    if (onChange) onChange(e);
  };

  const submitContent = (e: any) => {
    message.success("duckinfo已为你自动保存");
  };

  return (
    <>
      <Container>
        <BraftEditor
          value={flag && BraftEditor.createEditorState(data)}
          onChange={handleEditorChange}
          onSave={submitContent}
          defaultValue={BraftEditor.createEditorState(data)}
          className="editor"
          contentClassName="editorC"
          controlBarClassName="editorB"
        />
      </Container>
    </>
  );
};

TextW.defaultPrpos = {
  title: "",
  needTitle: true,
};

const Container = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  height: 75vh;
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
