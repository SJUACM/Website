import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import logo from '../../img/sjuacmlogo.png';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import About from '../../pages/About';


const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    
                    <NavLogo src={logo} alt="SJU ACM Logo" onClick={event =>  window.location.href='/'}>
                        
                    </NavLogo>

                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks>
                                <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>About</Link>
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='meetings'>Meetings</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks>
                                <Link to='/eboard' style={{textDecoration: 'none', color: 'white'}}>E-Board</Link>
                            </NavLinks>
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
