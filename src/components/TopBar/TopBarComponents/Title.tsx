import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {basicColor} from 'config/color';

export default function Title() {
    return (
        <Container className="titleOuter">
            <Link to="/home">
                <Logo className="logo" />
            </Link>
            <Link to="/home">
                <TitleText>DUCK INFO</TitleText>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width:16rem
`

const Logo = styled.div`
    width:5rem;
    height:5rem;
`

const TitleText=styled.span`
    font-family: STZhongsong;
    font-style : normal;
    font-weight: normal;
    font-size  : 1.7rem;
    color      : ${basicColor};
`