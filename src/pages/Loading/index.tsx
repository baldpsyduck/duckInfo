import styled from '@emotion/styled';
import {Spin} from 'antd';

export default function Loading() {
    return (
            <Spin tip="加载中">
                <Inner/>
            </Spin >
    )
}
const Inner=styled.div`
    height: 100vh;
    width: 100%;
`