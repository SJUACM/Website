import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {upcomingMeetings} from '../UpcomingMeetings/data'

var subNav = [];

if (upcomingMeetings.length === 0){
  subNav = [
    {
      title: 'All',
      path: '/meetings',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Fall 2023',
      path: '/meetings/Fall2023',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Spring 2023',
      path: '/meetings/Spring2023',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Fall 2022',
      path: '/meetings/Fall2022',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: '2021-2022',
      path: '/meetings/2021-2022',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: '2020-2021',
      path: '/meetings/2020-2021',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    }
  ]
}
else{
  subNav = [
    {
      title: 'All',
      path: '/meetings',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Upcoming',
      path: '/meetings/Upcoming',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Fall 2023',
      path: '/meetings/Fall2023',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Spring 2023',
      path: '/meetings/Spring2023',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Fall 2022',
      path: '/meetings/Fall2022',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: '2021-2022',
      path: '/meetings/2021-2022',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: '2020-2021',
      path: '/meetings/2020-2021',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    }
  ]
}


export const SidebarData = [
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillQuestionCircle />,
  },
  {
    title: 'Meetings',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: subNav
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
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <IoIcons.IoIosBook  />,
  }
];