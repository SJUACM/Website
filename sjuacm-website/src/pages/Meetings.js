import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MeetingsSection from '../components/MeetingsSection'
import GoToTop from '../GoToTop';

const Meetings = (semester) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} about_border_bottom={false} meeting_border_bottom={true} eboard_border_bottom={false} resources_border_bottom={false}/>

            <MeetingsSection {...semester} />
            
            <GoToTop />
        </>
    )
}

export default Meetings
