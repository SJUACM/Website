import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroMain, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, CarouselContainer } from './HeroElements'
import ImgCarousel from '../Carousel'
//import { CarouselContainer } from '../Carousel/CarouselElements'


const HeroSection = () => {
    
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>St. John's University ACM Student Chapter</HeroH1>
                <HeroP>
                    SJU's Premier Organization for Computer Science and Cyber Security
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Join our Mailing List {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            

            <CarouselContainer>
                <ImgCarousel />
            </CarouselContainer>
        </HeroContainer>

    )
}

export default HeroSection
