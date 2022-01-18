import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import EboardSection from '../components/EboardSection'
import {Faizan, Tom, Raymond, Teuta, Ava, Jade, Jake} from '../components/EboardSection/data'
import GoToTop from '../GoToTop';
import PrevEboardSection from '../components/EboardSection/prevEboard'
import Footer from '../components/Footer'

const Eboard = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} about_border_bottom={false} meeting_border_bottom={false} eboard_border_bottom={true} resources_border_bottom={false}/>
            <EboardSection {...Faizan} />
            <EboardSection {...Tom} />
            <EboardSection {...Teuta} />
            <EboardSection {...Raymond} />
            <EboardSection {...Jake} />
            <EboardSection {...Ava} />
            <EboardSection {...Jade} />

            <PrevEboardSection />

            <GoToTop />
            <Footer margin_top={'-100px'} margin_bottom={'-200px'} res_adjust={true}/>
        </>
    )
}

export default Eboard
