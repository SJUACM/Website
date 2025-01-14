import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/data'
import GoToTop from '../GoToTop';
import Footer from '../components/Footer'
import UpcomingMeetingsSection from '../components/UpcomingMeetings'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} about_border_bottom={false} meeting_border_bottom={false} eboard_border_bottom={false} resources_border_bottom={false}/>
         <HeroSection />
         <UpcomingMeetingsSection />
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <InfoSection {...homeObjThree}/>


         <GoToTop />
         <Footer margin_top={'0px'} margin_bottom={'-200px'} />
        </>
    )
}

export default Home
