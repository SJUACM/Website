// https://www.npmjs.com/package/react-responsive-carousel
import labPic1 from '../../img/lab_pic1.jpg'
import labPic2 from '../../img/lab_pic2.jpg'
import labPic3 from '../../img/lab_pic3.JPEG'
import labPic4 from '../../img/lab_pic4.jpg'
import labPic5 from '../../img/lab_pic5.jpg'
import labPic6 from '../../img/lab_pic6.jpg'
import labPic7 from '../../img/lab_pic7.jpg'


import { CarouselContainer, CarouselImg } from './CarouselElements.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ImgCarousel = () => {
        
    return (
        <CarouselContainer>
            <Carousel showThumbs={false}>

                <CarouselImg src={ labPic1 } />  
                <CarouselImg src={ labPic2 } />
                <CarouselImg src={ labPic3 } />
                <CarouselImg src={ labPic4 } />
                <CarouselImg src={ labPic5 } />
                <CarouselImg src={ labPic6 } />
                <CarouselImg src={ labPic7 } />
                
            </Carousel>
        </CarouselContainer>
    );
}


export default ImgCarousel;
