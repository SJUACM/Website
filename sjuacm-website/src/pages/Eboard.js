import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import EboardSection from '../components/EboardSection'
import {Faizan} from '../components/EboardSection/data'
import {Tom} from '../components/EboardSection/data'
import {Jade} from '../components/EboardSection/data'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <EboardSection {...Faizan} />
            <EboardSection {...Tom} />
            <EboardSection {...Jade} />
         
        </>
    )
}

export default About
