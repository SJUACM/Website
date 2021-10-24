import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="meetings" onClick={toggle}>Meetings</SidebarLink>
                    <SidebarLink to="eboard" onClick={toggle}>E-Board</SidebarLink>
                    <SidebarLink to="membership" onClick={toggle}>Membership</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/signin">Join our Mailing List</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
