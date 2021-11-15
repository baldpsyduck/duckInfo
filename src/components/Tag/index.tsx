import styled from "@emotion/styled";
import { Tag as AntdTag, TagProps } from "antd";
import getRandomColor from "utils/getRandomColor";

export default function Tag(props: TagProps) {
    return (
        <TagText color={props.color || getRandomColor()} {...props} />
    )
}

const TagText = styled(AntdTag)`
  -webkit-text-stroke:0.5px #414141;
  font-weight:1000
`