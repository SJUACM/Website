import React, {useState} from 'react'
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar'
import GoToTop from '../../../GoToTop';
import TeutaBlog from './TeutaBlog';
import Footer from '../../Footer';

const TeutaBlogTemplate = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} about_border_bottom={false} meeting_border_bottom={false} eboard_border_bottom={false} resources_border_bottom={false} blog_border_bottom={true}/>

         <TeutaBlog />

         <GoToTop />
         <Footer margin_top={'0px'} margin_bottom={'0px'} />
        </>
    )
}

export default TeutaBlogTemplate
