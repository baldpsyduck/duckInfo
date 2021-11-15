import styled from "@emotion/styled"
import { useState } from "react";
import Branch, { PointContainer } from './Branch';
import './Tree.css';
import { DatePicker, Input, Popconfirm, message } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { pushTree, delTreeNode, setKey, setTree } from 'store/features/projectSlice';
import moment from "moment";
import {branch} from 'types/project';

interface PointType extends branch {
    setNum: (para: string) => void,
    setSeq: (para: number) => void,
    num: string,
    order: string,
    seq: number,
    set?: boolean
}

const TreePoint = (props: PointType) => {

    const { title, date, children, set, order, seq, setNum, setSeq } = props;

    const Point = styled.button`
    width           : 16px;
    height          : 16px;
    background-color :#21b0ff;
    border-radius   : 16px;
    `
    const dispatch = useAppDispatch()

    const tree = useAppSelector(store => store.project.projectTree)

    return (
        <>
            <PBP className="PBP">
                <Head className="head">
                    <PBPTop className="PBPtop">
                        {set ?
                            <Input
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                                placeholder="请输入大节点名称"
                                bordered={false}
                                defaultValue={`${tree[Number(order)]?.title || ''}`}
                                onBlur={e => { dispatch(setTree({ title: e.target.value, num: Number(order) })) }}
                            />
                            : title}
                    </PBPTop>
                    {
                        set ?
                            <Popconfirm
                                title="是否删除该节点？"
                                onConfirm={() => {
                                    dispatch(delTreeNode(Number(order)));
                                    setSeq(seq - 1);
                                    message.success('删除成功');
                                }}
                                okText="是"
                                cancelText="否"
                            >
                                <PointDel />
                            </Popconfirm> :
                            <Point onClick={() => { setNum(order) }} />
                    }
                    <PBPFoot className="PBPfoot">{
                        set ?
                            (
                                <>
                                    <DatePicker
                                        style={{ width: '80%', marginLeft: '10%' }}
                                        placeholder={"截止日期"}
                                        defaultValue={
                                            tree[Number(order)]?.date ?
                                                moment(`${tree[Number(order)]?.date}`, 'YYYY-MM-DD') :
                                                undefined
                                        }
                                        onBlur={e => { dispatch(setTree({ date: e.target.value, num: Number(order) })) }}
                                    />
                                </>
                            )
                            : date}</PBPFoot>
                </Head>
                <Branch children={children} set={set} seq={Number(order)} />
            </PBP>
        </>
    )
}

const PointList = (props: { list?: branch[], set?: boolean }) => {

    const [num, setnum] = useState<string>('0');
    const [seq, setseq] = useState<number>(0)
    const dispatch = useAppDispatch()

    let keyNum: number = 0;

    return (
        <>
            <ProgressBar className="progressBar">
                {props.list?.map((title) => {

                    props.set && dispatch(setKey(keyNum++))

                    const pointProp = {
                        num: num,
                        setNum: (para: string) => setnum(para),
                        setSeq: (para: number) => setseq(para),
                        order: title.key,
                        set: props.set,
                        seq: seq,
                        ...title
                    }


                    return (<TreePoint {...pointProp} />)
                })}
                {
                    props.set &&
                    <PBP className="PBP">
                        <Head className="head">
                            <PBPTop className="PBPtop" />
                            <PointContainer content='添加大节点'>
                                <PointPlus onClick={() => { dispatch(pushTree({ title: '', date: '', key: `${seq}`, children: [] })); setseq(seq + 1) }} />
                            </PointContainer>
                            <PBPFoot className="PBPfoot" />
                        </Head> 
                    </PBP>
                } 
            </ProgressBar>
        </>
    )

}

export default function Tree(props: { list?: branch[], set?: boolean }) {

    const tree = useAppSelector(store => store.project.projectTree)

    return (
        <>
            <ProgressTop className="progressTop">
                <PointList list={props.set ? tree : props.list} set={props.set} />
            </ProgressTop>
        </>
    )
}

export const PointPlus = (props: React.HTMLProps<HTMLButtonElement>) => {
    return (
        <Point onClick={props.onClick} >
            <Plus />
        </Point>
    )
}

export const PointDel = (props: React.HTMLProps<HTMLButtonElement>) => {
    return (
        <Point onClick={props.onClick}>
            <Del />
        </Point >
    )
}

const ProgressTop = styled.div`
    width: 100%;
    height: 100px;
`

const ProgressBar = styled.div`
    width           : 100%;
    height          : 2px;
    background-color: #b4e4ff;
`

const PBP = styled.div`
    width     : 150px;  
    ::-webkit-scrollbar-track 
    {
        border-radius   : 3px;
        background-color: white;
    }
    .PBPTree {
        overflow-x: auto;
    }
`

const Head = styled.div`
    height: 100px;

`

const PBPTop = styled.span`
    height     : 35px;
    font-size  : 20px;
    line-height: 25px;  
`

const PBPFoot = styled.span`
    height     : 35px;
    font-size  : 16px;
    line-height: 21px;
    color      : #808080;
`
export const Point = styled.button`
    width           : 16px;
    height          : 16px;
    background-color :#21b0ff;
    border-radius   : 16px;
    display: flex;
    justify-content : center;
    align-items : center;
`

const Plus = styled(PlusOutlined)`
    font-size :16px;
    color :white;
`

const Del = styled(MinusOutlined)`
    font-size :16px;
    color :white;
`