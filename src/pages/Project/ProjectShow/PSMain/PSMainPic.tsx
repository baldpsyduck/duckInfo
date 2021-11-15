import styled from '@emotion/styled';
import { Carousel } from 'antd';


export default function PSMainPic() {
    return (
        <Container autoplay>
            <div>
                <Pic>1</Pic>
            </div>
            <div>
                <Pic>2</Pic>
            </div>
            <div>
                <Pic>3</Pic>
            </div>
            <div>
                <Pic>4</Pic>
            </div>
        </Container>
    )
}

const Pic = styled.h3`
    height:${55400 / 2000}vw;
    color:#fff;
    line-height:160px;
    text-align:center;
    background:#364d79;
`

const Container = styled(Carousel)`
    width:${97400 / 2000}vw;
    height:${55400 / 2000}vw;
`