import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import logo from '../../img/sjuacmlogo.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    
                    <img src={logo} alt="SJU ACM Logo" />

                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='meetings'>Meetings</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='eboard'>E-Board</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='membership'>Membership</NavLinks>
                        </NavItem>
                    </NavMenu>

                    {/* <NavBtn>
                        <NavBtnLink to='/signin'>Register</NavBtnLink>
                    </NavBtn>  */}                    

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
