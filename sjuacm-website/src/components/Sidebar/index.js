import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarSubLink, SidebarSubLinkContainer, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
    
    return (
        <>
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
                        <Link to='/meetings' style={{textDecoration: 'none', color: 'white', marginTop: '30px'}}>Meetings</Link>
                    </SidebarLink>
    
                    <SidebarSubLink>
                        <Link to='/meetings/Fall2021' style={{textDecoration: 'none', color: 'white', marginTop: '70px', paddingBottom: '10px'}}>- Fall 2021</Link>
                    </SidebarSubLink>

                    <SidebarSubLink>
                        <Link to='/meetings/Spring2021' style={{textDecoration: 'none', color: 'white', marginTop: '80px', paddingBottom: '20px'}}>- Spring 2021</Link>
                    </SidebarSubLink>

                    <SidebarSubLink>
                        <Link to='/meetings/Fall2020' style={{textDecoration: 'none', color: 'white', marginTop: '80px',  paddingBottom: '20px'}}>- Fall 2020</Link>
                    </SidebarSubLink>
            
                    
                    <SidebarLink>
                        <Link to='/eboard' style={{textDecoration: 'none', color: 'white', marginTop: '250px'}}>E-Board</Link>
                    </SidebarLink>

                    <SidebarLink>
                        <Link to='/resources' style={{textDecoration: 'none', color: 'white'}}>Resources</Link>
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap style={{paddingTop: '150px'}}>
                    <SidebarRoute to="/" onClick={() => window.location.href='https://forms.gle/CGcyq93XaLUfMAkz9'}>Join our Mailing List</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>

            

        </SidebarContainer>

        </>
    )
}

export default Sidebar
