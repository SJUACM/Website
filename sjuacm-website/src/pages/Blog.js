import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import GoToTop from '../GoToTop';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Blog = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} about_border_bottom={false} meeting_border_bottom={false} eboard_border_bottom={false} resources_border_bottom={false} blog_border_bottom={true}/>

         <BlogSection />

         <GoToTop />
         <Footer margin_top={'-100px'} margin_bottom={'-200px'} />
        </>
    )
}

export default Blog
