// https://www.npmjs.com/package/react-responsive-carousel
import labPic1 from '../../img/lab_pic1.jpg'
import labPic2 from '../../img/lab_pic2.jpg'
import labPic3 from '../../img/lab_pic3.JPEG'
import labPic4 from '../../img/lab_pic4.jpg'
import labPic5 from '../../img/lab_pic5.jpg'
import labPic6 from '../../img/lab_pic6.jpg'
import labPic7 from '../../img/lab_pic7.jpg'
import labPic8 from '../../img/lab_pic8.jpg'
import labPic9 from '../../img/lab_pic9.jpg'
import labPic10 from '../../img/lab_pic10.jpg'
import sapPic1 from '../../img/meetingPics/sapCarousel/sapPic1.jpg'
import sapPic2 from '../../img/meetingPics/sapCarousel/sapPic2.jpg'
import sapPic3 from '../../img/meetingPics/sapCarousel/sapPic3.jpg'
import sapPic4 from '../../img/meetingPics/sapCarousel/sapPic4.jpg'
import sapPic5 from '../../img/meetingPics/sapCarousel/sapPic5.jpg'
import sapPic6 from '../../img/meetingPics/sapCarousel/sapPic6.jpg'


import { CarouselContainer, CarouselImg } from './CarouselElements.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const ImgCarousel = () => {
        
    return (
        <CarouselContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>

                <CarouselImg src={ labPic1 } />  
                <CarouselImg src={ labPic3 } />
                <CarouselImg src={ labPic4 } />
                <CarouselImg src={ labPic5 } />
                <CarouselImg src={ labPic2 } />
                <CarouselImg src={ labPic6 } />
                <CarouselImg src={ labPic9 } />
                <CarouselImg src={ labPic10 } />
                <CarouselImg src={ labPic8 } />
                <CarouselImg src={ labPic7 } />          
                
            </Carousel>
        </CarouselContainer>
    );
}

export const SAPCarousel = () => {
        
    return (
        <CarouselContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>

                <CarouselImg src={ sapPic1 } />  
                <CarouselImg src={ sapPic2 } />
                <CarouselImg src={ sapPic3 } />
                <CarouselImg src={ sapPic4 } />
                <CarouselImg src={ sapPic5 } />
                <CarouselImg src={ sapPic6 } />
                
            </Carousel>
        </CarouselContainer>
    );
}


//export default ImgCarousel;
