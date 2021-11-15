import { branch } from 'types/project';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { ShowMD } from 'components/MarkDown';
import Branch from 'components/Branch';
import TitleBar from 'components/TitleBar';

interface propsType {
    tree: branch[]
}

export default function ProjectTree(props: propsType) {

    const { tree } = props;

    return (
        <Container>
                <Branch tree={tree} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

