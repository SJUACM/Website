import React from 'react';
import { SidebarContainer, Icon, CloseIcon} from './SidebarElements'
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import styled from 'styled-components';


const SidebarWrap = styled.div`
  width: 100%;
  padding-left: 5rem;
  
`;

const Sidebar = ({ isOpen, toggle }) => {
    
    return (
        <>
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrap>
                {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index}/>;
                })}
            </SidebarWrap>

            

        </SidebarContainer>

        </>
    )
}

export default Sidebar
