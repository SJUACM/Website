import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { AltButton } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, HeroBtnContainer, ArrowForward, ArrowRight, CarouselContainer } from './HeroElements'
import { ImgCarousel } from '../Carousel'
//import { CarouselContainer } from '../Carousel/CarouselElements'


const HeroSection = () => {
    
    const [hover1, setHover1] = useState(false)

    const onHover1 = () => {
        setHover1(!hover1)
    }

    const [hover2, setHover2] = useState(false)

    const onHover2 = () => {
        setHover2(!hover2)
    }

    const [hover3, setHover3] = useState(false)

    const onHover3 = () => {
        setHover3(!hover3)
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
                <HeroBtnContainer>
                    <HeroBtnWrapper>
                        <AltButton onMouseEnter={onHover1} onMouseLeave={onHover1} primary='true' dark='true' onClick={() => window.open('https://discord.gg/fjMSxbER4F', '_blank', 'noopener,noreferrer') }>
                            Join our Discord Server {hover1 ? <ArrowForward /> : <ArrowRight />}
                        </AltButton>                    
                    </HeroBtnWrapper>
                    <HeroBtnWrapper>
                        <AltButton onMouseEnter={onHover2} onMouseLeave={onHover2} primary='true' dark='true' onClick={() => window.open('https://www.instagram.com/sjuacm/', '_blank', 'noopener,noreferrer') }>
                            Follow us on Instagram {hover2 ? <ArrowForward /> : <ArrowRight />}
                        </AltButton>                    
                    </HeroBtnWrapper>
                    {/* <HeroBtnWrapper>
                        <AltButton onMouseEnter={onHover3} onMouseLeave={onHover3} primary='true' dark='true' onClick={() => window.open('https://forms.gle/CGcyq93XaLUfMAkz9', '_blank', 'noopener,noreferrer') }>
                            Subscribe to our Mailing List {hover3 ? <ArrowForward /> : <ArrowRight />}
                        </AltButton>                    
                    </HeroBtnWrapper> */}
                </HeroBtnContainer>
            </HeroContent>

            <CarouselContainer>
                <ImgCarousel />
            </CarouselContainer>
        </HeroContainer>

    )
}

export default HeroSection
