import styled from '@emotion/styled';
import { Input, Menu, Dropdown, InputProps } from 'antd';
import { ReactChild, useState, memo, useRef } from 'react';

interface pulldownDivProps extends InputProps {
    mention?: boolean;
    dropdownOverlay?: ReactChild;
}


export default function PulldownDiv(props: pulldownDivProps) {


    const PDInput = styled(Input)`
        ${{ ...props.style }}
        color:${props.style?.backgroundColor || 'white'}
    `

    return (
        <div>
            <Dropdown overlay={<MenuContainer >{props.dropdownOverlay}</MenuContainer>} trigger={['click']} >
                <PDInput/>
            </Dropdown>
        </div>
    )
}

const MenuContainer = styled(Menu)`
    min-height:10rem;
`
