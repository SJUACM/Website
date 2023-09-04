// https://www.npmjs.com/package/react-responsive-carousel
import labPic1 from '../../img/lab_pic1.jpg'
import labPic2 from '../../img/lab_pic2.jpg'
import labPic3 from '../../img/lab_pic3.JPEG'
import labPic5 from '../../img/lab_pic5.jpg'
import labPic8 from '../../img/lab_pic8.jpg'
import labPic9 from '../../img/lab_pic9.jpg'
import swe_interviewprep from '../../img/sweInterviewPrep.jpg'
import research from '../../img/research.jpg'


import kickoff22 from '../../img/kickoff22.jpg'
import hackathon from '../../img/hs_hackathon.jpg'
import sap from '../../img/sap_office.jpg'
import abet from '../../img/abet_event.JPG'


import { CarouselContainer, CarouselImg } from './CarouselElements.js';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const ImgCarousel = () => {
        
    return (
        <CarouselContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
 
                <CarouselImg src={ kickoff22 } />
                <CarouselImg src={ hackathon } /> 
                <CarouselImg src={ sap } />     
                <CarouselImg src={ research } />
                <CarouselImg src={ labPic1 } />  
                <CarouselImg src={ abet } /> 
                <CarouselImg src={ labPic3 } />
                <CarouselImg src={ labPic5 } />
                <CarouselImg src={ labPic2 } />
                <CarouselImg src={ labPic9 } />
                <CarouselImg src={ labPic8 } />
                <CarouselImg src={ swe_interviewprep } />          
                {/* <CarouselImg src={ labPic4 } /> */}
                {/* <CarouselImg src={ labPic6 } /> */}
                
            </Carousel>
        </CarouselContainer>
    );
}


export const MeetingCarousel = ({carousel}) => {
    const carouselImgs = []
    for (const img of carousel) {
        carouselImgs.push(<CarouselImg src={ img } />);
    }
    return (
        <CarouselContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
                {carouselImgs}  
            </Carousel>
        </CarouselContainer>
    );
}


//export default ImgCarousel;
