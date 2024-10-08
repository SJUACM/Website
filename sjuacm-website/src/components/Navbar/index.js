import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import logo from '../../img/sjuacmlogo.png';
import { Link } from 'react-router-dom';
import Dropdown from '../DropdownComponent/Dropdown';
import './Navbar.css';

const Navbar = ({ toggle, about_border_bottom, meeting_border_bottom, eboard_border_bottom, resources_border_bottom, blog_border_bottom }) => {

    const [setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    
                    <NavLogo src={logo} alt="SJU ACM Logo" onClick={event =>  window.location.href='/'} />

                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks style={{borderBottom : about_border_bottom ? "2px solid red" : ''}}>
                                <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>About</Link>
                            </NavLinks>
                        </NavItem>
                        
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link to='/meetings' className='nav-links' onClick={closeMobileMenu} style={{textDecoration: 'none', color: 'white', borderBottom : meeting_border_bottom ? "2px solid red" : ''}}>
                                Meetings <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>

                        <NavItem>
                            <NavLinks style={{borderBottom : eboard_border_bottom ? "2px solid red" : ''}}>
                                <Link to='/eboard' style={{textDecoration: 'none', color: 'white'}}>E-Board</Link>
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks style={{borderBottom : resources_border_bottom ? "2px solid red" : ''}}>
                                <Link to='/resources' style={{textDecoration: 'none', color: 'white'}}>Resources</Link>
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks style={{borderBottom : blog_border_bottom ? "2px solid red" : ''}}>
                                <Link to='/blog' style={{textDecoration: 'none', color: 'white'}}>Blog</Link>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
