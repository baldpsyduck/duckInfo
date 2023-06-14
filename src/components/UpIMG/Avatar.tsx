import styled from "@emotion/styled";
import { HTMLProps, useState } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { basicColor } from "config/color";
import { nanoid } from "nanoid";
import avatar from "assets/img/avatar.png";
import {useAppSelector} from 'store/hooks';

interface UpIMGProps extends HTMLProps<HTMLDivElement> {
  desText?: string;
  imgFunc?: (file:File,e: string) => void;
  defaultValue?: string;
}

export default function Avatar(props: UpIMGProps) {
  const inputID = nanoid();

  const { className, id, desText: text, imgFunc} = props;
  const iniavatar=useAppSelector(store=>store.me.data.avatar)

  const [IMGUrl, setIMGUrl] = useState<string>(
    iniavatar ? iniavatar : avatar
  );

  const Background = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container className={"UpIMGbackC " + className} id={id}>
      <Upper className={IMGUrl === "" ? "" : "Upper"}>
        <button>
          <PlusOutlined />
          <span>更换头像</span>
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
              if (imgFunc) imgFunc(e.target.files![0],reader.result + "");
            },
            false
          );
        }}
        type="file"
      />
      <Background>
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
  height: 100%;
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
      pointer-events: none;
    }
  }
`;
