import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import {upcomingMeetings} from '../UpcomingMeetings/data'

var MenuItems = [];

if (upcomingMeetings.length === 0){
  MenuItems = [
      // {
      //   title: 'Fall 2024',
      //   path: '/meetings/Fall2024',
      //   cName: 'dropdown-link'
      // },
      {
        title: 'Spring 2024',
        path: '/meetings/Spring2024',
        cName: 'dropdown-link'
      },
      {
        title: 'Fall 2023',
        path: '/meetings/Fall2023',
        cName: 'dropdown-link'
      },
      {
        title: 'Spring 2023',
        path: '/meetings/Spring2023',
        cName: 'dropdown-link'
      },
      {
        title: 'Fall 2022',
        path: '/meetings/Fall2022',
        cName: 'dropdown-link'
      },
      {
        title: '2021-2022',
        path: '/meetings/2021-2022',
        cName: 'dropdown-link'
      },
      {
        title: '2020-2021',
        path: '/meetings/2020-2021',
        cName: 'dropdown-link'
      },
    ];
  }
  else{
    MenuItems = [
      {
        title: 'Upcoming',
        path: '/meetings/Upcoming',
        cName: 'dropdown-link'
      },
      // {
      //   title: 'Fall 2024',
      //   path: '/meetings/Fall2024',
      //   cName: 'dropdown-link'
      // },
      {
        title: 'Spring 2024',
        path: '/meetings/Spring2024',
        cName: 'dropdown-link'
      },
      {
        title: 'Fall 2023',
        path: '/meetings/Fall2023',
        cName: 'dropdown-link'
      },
      {
        title: 'Spring 2023',
        path: '/meetings/Spring2023',
        cName: 'dropdown-link'
      },
      {
        title: 'Fall 2022',
        path: '/meetings/Fall2022',
        cName: 'dropdown-link'
      },
      {
        title: '2021-2022',
        path: '/meetings/2021-2022',
        cName: 'dropdown-link'
      },
      {
        title: '2020-2021',
        path: '/meetings/2020-2021',
        cName: 'dropdown-link'
      },
    ];
  }


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