import { Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";

const treeData = [
  {
    title: "2021年",
    key: "2021",
    selectable: false,
    children: [
      {
        title: "1月",
        key: "2021/1",
      },
      {
        title: "2月",
        key: "2021/2",
      },
    ],
  },
  {
    title: "2020年",
    key: "2020",
    selectable: false,
    children: [
      {
        title: "1月",
        key: "2020/1",
      },
      {
        title: "2月",
        key: "2020/2",
      },
    ],
  },
];

interface TreeProps {
  onBtnClick: (id: string) => void;
}

export default function Timer(props: TreeProps) {
  const { onBtnClick } = props;

  return (
    <>
    <span>时间轴</span>
      <Tree
        showIcon
        defaultExpandAll
        defaultSelectedKeys={["0-0-0"]}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
        showLine
        onSelect={(e) => {
          onBtnClick(`calPage${e[0]}`);
        }}
      />
    </>
  );
}
