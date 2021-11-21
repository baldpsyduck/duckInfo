import { Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";

const date = new Date();

let treeData: Array<any> = [];

for (let j = date.getFullYear(); j > 2019; j--) {
  let children: Array<any> = [];
  for (let i = j == date.getFullYear() ? date.getMonth() + 1 : 12; i > 0; i--) {
    children.push({ title: `${i}月`, key: `${j}/${i}` });
  }
  treeData.push({
    title: `${j}年`,
    key: `${j}`,
    selectable: false,
    children: children,
  });
}

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
        defaultSelectedKeys={["2021"]}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
        showLine
        onSelect={(e) => {
          e[0] && onBtnClick(`${e[0]}`);
        }}
      />
    </>
  );
}
