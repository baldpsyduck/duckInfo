import styled from '@emotion/styled';
import MentionCard from 'components/MetionCard';
import { useMemo } from 'react';
import { member } from 'types/project';

let showMembers: Array<{ role: string, mem: string[] }> = [{ role: 'leader', mem: [] }]
let roles: string[] = ['leader']

const MemberList = (props: { usernames: string[], isAdmin: boolean }) => {

    const MCStyled = styled(MentionCard)`
        margin-right: 5px;
    `

    return (
        <>
            {
                props.usernames.map((username) => {
                    return (
                        <MCStyled key={username} username={username} button={props.isAdmin} />
                    )
                })
            }
        </>
    )
}

export default function PSMainTeam(props: { members: member[], isAdmin: boolean }) {


    useMemo(() => {

        showMembers = [{ role: 'leader', mem: [] }]
        roles = ['leader']

        /* props.members.map((member) => {
            const index = roles.indexOf(member.role);
            if (index === -1) {
                roles.push(member.role);
                showMembers.push({ role: member.role, mem: [member.username] })
            } else {
                showMembers[index].mem.push(member.username)
            }
        }) */
    }, [])

    return (
        <>
            {
                showMembers.map((member) => {
                    return (
                        <Container key={member.role} className="memList">
                            <Title >{`${member.role} :`}</Title>
                            <MemberList usernames={member.mem} isAdmin={props.isAdmin} />
                        </Container>
                    )
                })
            }
        </>
    )
}

const Container = styled.div` 
    width:100%;
    height:auto
`

const Title = styled.span`
    font-size:20px
`