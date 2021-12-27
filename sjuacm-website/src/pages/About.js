import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AboutPage from '../components/AboutSection'
import HeroSection from '../components/HeroSection'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} about_border_bottom={true} meeting_border_bottom={false} eboard_border_bottom={false}/>
            <AboutPage />
         
        </>
    )
}

export default About
