import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillQuestionCircle />,
  },
  {
    title: 'Meetings',
    path: '/meetings',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Fall 2021',
        path: '/meetings/Fall2021',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Spring 2021',
        path: '/meetings/Spring2021',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Fall 2020',
        path: '/meetings/Fall2020',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'E-Board',
    path: '/eboard',
    icon: <IoIcons.IoIosPeople />,
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <AiIcons.AiOutlineLink />,
  }
];