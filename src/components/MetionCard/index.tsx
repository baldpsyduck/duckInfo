import styled from "@emotion/styled";
import { useAppSelector } from 'store/hooks';
import {userGetUser} from 'api';

interface propsType {
    color?: string;
    size?: number;
    button?: boolean;
    username: string;
}

export default function MentionCard(props: propsType) {

    /* userGetUser() */

    const { button, username } = props;

    const logUser = useAppSelector(store => store.me.data.username)

    const color = props.color || '#a4deff';
    const size = props.size || 51

    const Container = styled.div`
        background-color: ${color};
        height: ${size}px;
        border-radius: ${size}px;
        display: flex;
        align-items: center;
    `

    const Avator = styled.div`
        background-color: black;
        height: ${size}px;
        width: ${size}px;
        border-radius: ${size}px;
    `

    const Name = styled.span`
        margin: 0px 16px;
        font-size: ${size * 24 / 51}px
    `

    const Button = styled.div`
        margin-right: 16px
    `

    return (
        <Container>
            <Avator className="avator" />

            <Name>{username}</Name>

            {
                button && username !== logUser && <Button><button>X</button></Button>
            }

        </Container>
    )
}
