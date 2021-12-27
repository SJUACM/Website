import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>

                    <SidebarLink>
                        <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>About</Link>
                    </SidebarLink>
                    
                    <SidebarLink>
                        <Link to='/meetings' style={{textDecoration: 'none', color: 'white'}}>Meetings</Link>
                    </SidebarLink>
                    
                    <SidebarLink>
                        <Link to='/eboard' style={{textDecoration: 'none', color: 'white'}}>E-Board</Link>
                    </SidebarLink>

                    <SidebarLink>
                        <Link to='/membership' style={{textDecoration: 'none', color: 'white'}}>Membership</Link>
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/signin">Join our Mailing List</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
