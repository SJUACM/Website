import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { AltButton } from '../ButtonElements'
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
                <VideoBg autoPlay loop muted playsinline src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>St. John's University ACM Student Chapter</HeroH1>
                <HeroP>
                    SJU's Premier Organization for Computer Science and Cyber Security
                </HeroP>
                <HeroBtnWrapper>
                    <AltButton onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' onClick={() => window.location.href='https://forms.gle/CGcyq93XaLUfMAkz9'}>
                        Join our Mailing List {hover ? <ArrowForward /> : <ArrowRight />}
                    </AltButton>
                    
                </HeroBtnWrapper>
            </HeroContent>

            <CarouselContainer>
                <ImgCarousel />
            </CarouselContainer>
        </HeroContainer>

    )
}

export default HeroSection
