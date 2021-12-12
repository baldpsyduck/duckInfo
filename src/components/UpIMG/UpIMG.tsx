import styled from "@emotion/styled";
import { HTMLProps, useCallback, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { basicColor } from "config/color";

interface UpIMGProps extends HTMLProps<HTMLDivElement> {
  desText?: string;
}

export default function UpIMG(props: UpIMGProps) {
  const { className, id, style, desText: text } = props;
  const [IMGUrl, setIMGUrl] = useState<string>("");
  return (
    <Container className={"UpIMGbackC " + className} id={id}>
      <Input
        onChange={(e) => {
          const reader = new FileReader();
          e.target.files && reader.readAsDataURL(e.target.files[0]);
          reader.addEventListener(
            "load",
            function () {
              setIMGUrl(reader.result + "");
              console.log("reader.result", reader.result, typeof reader.result);
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
  width:100%;
`;

const Background = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
`;
