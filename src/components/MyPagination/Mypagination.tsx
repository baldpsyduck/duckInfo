import styled from "@emotion/styled";
import { Pagination } from "antd";
import "./MyPagination.css";

function itemRender(
  current: number,
  type: string,
  originalElement: React.ReactElement<HTMLElement>
) {
  if (type === "prev") {
    return (
      <a>
        <HistoryBtn className="forward" />
      </a>
    );
  }
  if (type === "next") {
    return (
      <a>
        <HistoryBtn className="backward" />
      </a>
    );
  }
  return originalElement;
}

export default function MyPagination(props: {
  total?: number;
  onChange?: (e: number) => void;
}) {
  const total = props.total;
  return (
    <Container
      className="myPagination"
      pageSize={9}
      total={total}
      itemRender={itemRender}
      showSizeChanger={false}
      onChange={props.onChange}
    />
  );
}

const HistoryBtn = styled.div`
  height: 37.1px;
  width: 119.1px;
`;

const Container = styled(Pagination)`
  height: 37.1px;
`;
