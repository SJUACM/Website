import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import EboardSection from '../components/EboardSection'
import {Faizan, Tom, Raymond, Jade} from '../components/EboardSection/data'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} about_border_bottom={false} meeting_border_bottom={false} eboard_border_bottom={true}/>
            <EboardSection {...Faizan} />
            <EboardSection {...Tom} />
            <EboardSection {...Raymond} />
            <EboardSection {...Jade} />
         
        </>
    )
}

export default About
