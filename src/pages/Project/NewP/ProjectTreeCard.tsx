import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { DataNode } from 'antd/lib/tree';
import Tree from 'components/Tree';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { pushTree } from 'store/features/projectSlice';
import { useMemo, useState } from 'react';

interface propsType {
    className?: string;
    children?: DataNode[];
    btn?: ReactJSXElement;
}


export default function ProjectTreeCard(props: propsType) {
    return (
        <>
            <TreeContainer>
                <Tree set />
            </TreeContainer>
        </>
    );
}

const TreeContainer = styled.div`
    overflow-y:auto;
    height:90%;
`
