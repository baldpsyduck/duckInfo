import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Tree, Input, Popover, Popconfirm, message, } from 'antd';
import { DataNode } from 'antd/lib/tree';
import { ReactChild, useState } from 'react';

import { Point, PointPlus, PointDel } from './index';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { pushChild, delChild, setChildKey, setChild } from 'store/features/projectSlice';

interface propsType {
    seq: number;
    className?: string;
    children: DataNode[];
    btn?: ReactJSXElement;
    set?: boolean;
}

let seq1 = 0;

export default function Branch(props: propsType) {


    const { set, btn, children,  seq } = props

    const [num, setnum] = useState<number>(0);

    const dispatch = useAppDispatch()

    const tree = useAppSelector(store => store.project.projectTree)

    const Btn = (props: { order?: Array<number> }) => {

        const order: Array<number> = props.order || []

        return (
            <>
                <AddBox> 
                    {
                        btn ||
                        (set ?
                            <Popconfirm
                                title="是否删除该节点？"
                                onConfirm={() => {
                                    message.success('删除成功');
                                    dispatch(delChild(order))
                                }}
                                okText="Yes"
                                cancelText="No"
                            >
                                <PointDel />
                            </Popconfirm>
                            : <Point />)
                    }
                    {set && (
                        <>
                            <SpaceLeft />
                            <Input
                                placeholder='请输入节点'
                                defaultValue={`${tree[order[0]]?.children[order[1]]?.title}`}
                                onBlur={(e) => { dispatch(setChild({ content: e.target.value, num: order })) }}
                            />
                        </>)}
                </AddBox>
                <Space />
            </>
        )
    }


    return (
        <div className={props.className}>
            <Space />
            <PointTree>
                <div className='PBPTree'>
                    {
                        set ?
                            children.map((child) => {
                                dispatch(setChildKey([seq, seq1++]))
                                const key: string = child.key.toString()
                                return (<Btn key={key} order={key.split(/-/).map(Number)} />)
                            }) :
                            <Tree
                                defaultExpandAll
                                className='PBPTree'
                                switcherIcon={<Btn />}
                                showLine={true}
                                showIcon={true}
                                treeData={props.children}
                            />
                    }
                </div>
                {
                    set &&
                    <AddBox>
                        <PointContainer content='添加小节点'>
                            <PointPlus onClick={() => {
                                dispatch(pushChild({
                                    seq: seq,
                                    content: { title: '', key: `${seq}-${num}`, children: [] }
                                }));
                                setnum(num + 1);
                            }} />
                        </PointContainer>
                    </AddBox>
                }
            </PointTree>
        </div>
    );
};

const Space = styled.div`
    margin-bottom:16px;
`

const PointTree = styled.div`
    overflow-x: auto;
    margin-left:13px;
`

const AddBox = styled.div`
    display:flex;
    align-items: center;
`

const Container = styled.div`
    width:16px;
    height:16px;
`

export const PointContainer = (props: { content?: string, children: ReactChild }) => {

    return (
        <Popover content={props.content}>
            <Container>
                {props.children}
            </Container>
        </Popover>
    )
}

const SpaceLeft = styled.div`
    width:16px;
`