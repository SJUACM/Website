import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MeetingsSection from '../components/MeetingsSection'
import {SWEInterviewPrep, RevEng} from '../components/MeetingsSection/data'

const Meetings = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <MeetingsSection {...SWEInterviewPrep} />
            <MeetingsSection {...RevEng} />
         
        </>
    )
}

export default Meetings
