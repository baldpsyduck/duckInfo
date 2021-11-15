import styled from '@emotion/styled';

import TitleBar from 'components/TitleBar';
import ProSrc from './ProSrc';
import ProDes from './ProDes';

interface propsType{
    description: string, 
    isAdmin: boolean, 
    links?: string[],
    tags?: string[]
}

export default function PSRight(props: propsType) {

    const { isAdmin: isLeader,description,links } = props;

    return (
        <Container className="psRight">
            <ProIntr className="projectIntr">
                <ProDes description={description} tags={props.tags||[]} isLeader={isLeader}/>
            </ProIntr>
            <div className="projectSrc">
                <ProSrc links={links} isLeader={isLeader} />
            </div>
            <div className="projectHonor">
                <TitleBar title={true} lcChild="项目荣誉" size={20} />
                <span >{`用于维护实验室项目的网站项目。`}</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: ${(595 / 1920) * 100}%;
    height: 100%;
    overflow-y: auto;
    min-width:30rem;
    max-width:50rem
`

const ProIntr = styled.div`
    width: 100%;
`



