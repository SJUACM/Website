import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarSubLink, SidebarSubLinkContainer, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
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
