import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
        title: 'Spring 2022',
        path: '/meetings/Spring2022',
        cName: 'dropdown-link'
    },
    {
      title: 'Fall 2021',
      path: '/meetings/Fall2021',
      cName: 'dropdown-link'
    },
    {
      title: 'Spring 2021',
      path: '/meetings/Spring2021',
      cName: 'dropdown-link'
    },
    {
      title: 'Fall 2020',
      path: '/meetings/Fall2020',
      cName: 'dropdown-link'
    },
  ];


const Dropdown = () => {
  
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown