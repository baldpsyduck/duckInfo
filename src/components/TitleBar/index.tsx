import styled from "@emotion/styled";
import { ReactChild } from "react";
import { Link } from "react-router-dom"
import { useAppSelector } from 'store/hooks';

interface TitleBarProps {
    title?: boolean;
    button?: boolean;
    link?: string;
    cutLine?: boolean;
    size?: number;
    lineColor?: string;
    lcColor?: string;
    lcChild?: string | ReactChild;
    rcChild?: string | ReactChild;
    onBtnClick?: (e: any) => void;
}

export default function TitleBar(props: TitleBarProps) {

    const loc = useAppSelector(store => store.loc)

    const { button, title, cutLine, onBtnClick } = props;

    const size = props.size || 30
    const lineColor = props.lineColor || "#2fb9f4"
    const lcColor = props.lcColor || '#a4deff'
    const link = props.link || loc.location

    const TitleBar = styled.div`
        width: 100%;
        padding-bottom: ${2 / 3 * size}px;
        display: flex;
        justify-content: space-between;
        border-bottom: ${(cutLine || title) && '1px solid #e8e8e8'};
        flex-direction:row
    `

    const Left = styled.div`
        display: flex;
        align-items: center
    `

    const Title = styled.div`
        width: 6px;
        height: ${size}px;
        background-color: ${lineColor}
    `

    const Space = styled.div`
        width: 15px
    `

    const LcText = styled.div`
        height: ${size}px;
        background-color: ${title ? 'white' : lcColor};
        display:flex;
        align-items: center;
        font-size: ${title ? size : (size * 2 / 3)}px;
        font-weight: ${title ? 700 : 500};
    `
    const RightBtn = styled(Link)`
        border:2px solid ${lineColor};
        border-radius:${size * 13 / 40}px;
        display:flex;
        align-items:center;
        color:black;
        font-size:${size * 2 / 3}px;
        padding:${size * 1 / 8}px ${size * 1 / 2}px;
    `

    const RightText = styled.div`
        color:#a0a0a0;
        font-size:${title ? size * 3 / 4 : size * 13 / 30}px;
        display:flex;
        align-items:center;
    `

    return (

        <TitleBar className="titleBar">

            <Left className="left">

                <Title />

                <Space />

                <LcText >&nbsp;&nbsp;{props.lcChild}&nbsp;&nbsp;</LcText>

            </Left>
            {
                button ?
                    <RightBtn to={link} onClick={onBtnClick}> <span >{props.rcChild}</span></RightBtn>
                    :
                    <RightText className="right">{props.rcChild} </RightText>
            }

        </TitleBar>
    )
}
