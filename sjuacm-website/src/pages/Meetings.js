import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MeetingsSection from '../components/MeetingsSection'
import {SWEInterviewPrep, RevEng, DayInTheLife, WomenInTech, GameDev, DataAnalytics, Fall2021Kickoff} from '../components/MeetingsSection/data'
import GoToTop from '../GoToTop';

const Meetings = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} about_border_bottom={false} meeting_border_bottom={true} eboard_border_bottom={false}/>
            <MeetingsSection {...SWEInterviewPrep} />
            <MeetingsSection {...RevEng} />
            <MeetingsSection {...DayInTheLife} />
            <MeetingsSection {...WomenInTech} />
            <MeetingsSection {...GameDev} />
            <MeetingsSection {...DataAnalytics} />
            <MeetingsSection {...Fall2021Kickoff} />


            <GoToTop />
        </>
    )
}

export default Meetings