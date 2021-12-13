import styled from "@emotion/styled";
import { HTMLProps, useState } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { basicColor } from "config/color";
import { nanoid } from "nanoid";

interface UpIMGProps extends HTMLProps<HTMLDivElement> {
  desText?: string;
  imgFunc?: (e: string) => void;
  delFunc?: () => void;
  defaultValue?: string;
}

export default function UpIMG(props: UpIMGProps) {
  const inputID = nanoid();
  const {
    className,
    id,
    style,
    desText: text,
    imgFunc,
    delFunc,
    defaultValue,
  } = props;
  const [IMGUrl, setIMGUrl] = useState<string>(
    defaultValue ? defaultValue : ""
  );

  return (
    <Container className={"UpIMGbackC " + className} id={id}>
      <Upper className={IMGUrl === "" ? "" : "Upper"}>
        <button
          onClick={() => {
            const input: any = document.getElementById(inputID);
            input.value = "";
            setIMGUrl("");
            if (delFunc) delFunc();
            return false;
          }}
        >
          <DeleteOutlined />
        </button>
      </Upper>
      <Input
        id={inputID}
        onChange={(e) => {
          const reader = new FileReader();
          e.target.files &&
            e.target.files[0] &&
            reader.readAsDataURL(e.target.files[0]);
          reader.addEventListener(
            "load",
            function () {
              setIMGUrl(reader.result + "");
              if (imgFunc) imgFunc(reader.result + "");
            },
            false
          );
        }}
        type="file"
      />
      <Background style={style}>
        {
          <>
            <IMG src={IMGUrl} />
            <PlusOutlined />
            <span>{text || "请上传文件"}</span>
          </>
        }
      </Background>
    </Container>
  );
}

const Input = styled.input`
  opacity: 0;
  cursor: pointer;
  width: 150%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 999;
  position: absolute;
`;

const IMG = styled.img`
  position: absolute;
  width: 100%;
`;

const Background = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Upper = styled.div`
  width: 100%;
  height: 100%;
  display: transparent;
  color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Container = styled.div`
  border: 1px dashed #c0c0c0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  color: #c0c0c0;

  :hover {
    border: 1px dashed ${basicColor};
    color: ${basicColor};

    .Upper {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #c0c0c0;
      z-index: 9999;
      position: absolute;
      transition: 300ms;
    }
  }
`;
