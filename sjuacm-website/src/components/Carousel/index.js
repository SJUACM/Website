// https://www.npmjs.com/package/react-responsive-carousel
import labPic1 from '../../img/lab_pic1.jpg'
import labPic2 from '../../img/lab_pic2.jpg'
import labPic3 from '../../img/lab_pic3.JPEG'

import { CarouselContainer } from './CarouselElements.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ImgCarousel = () => {
        
    return (
        <CarouselContainer>
            <Carousel showThumbs={false}>
                <div>
                    <img src={ labPic1 } />
                </div>
                <div>
                    <img src= { labPic2 } />
                </div>
                <div>
                    <img src={ labPic3 } />
                </div>
            </Carousel>
        </CarouselContainer>
    );
}


export default ImgCarousel;
