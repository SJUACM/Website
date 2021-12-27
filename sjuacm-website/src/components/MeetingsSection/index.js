import React from 'react'
import { Button } from '../ButtonElements'
import { MeetingContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Heading2, Subtitle, BtnWrap, ImgWrap, Img } from './MeetingElements'
import {
    faYoutube,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MeetingSection = ({date, name, description, slidesLink, codeLink, youtubeLink, img, margin_top, margin_left}) => {
    return (
        <>
            <MeetingContainer style={{marginTop : margin_top }}>
                <InfoWrapper>
                    <InfoRow>
                        
                        <Column1 style={{marginLeft : margin_left}}>
                            <TextWrapper>
                                
                                <TopLine>{date}</TopLine>
                                <Heading>{name}</Heading>
                                <Subtitle>{description}</Subtitle>
                                
                                {(slidesLink != '' && codeLink != '') && 
                                    <><a href={slidesLink} download style={{ color: 'white' }}>Download Slides</a><a href={codeLink} style={{ color: 'white', marginLeft: '40px' }}>Run the Source Code</a></>  
                                }

                                {(slidesLink != '' && codeLink == '') && 
                                    <><a href={slidesLink} download style={{ color: 'white' }}>Download Slides</a></>  
                                }
                                
                                {(slidesLink == '' && codeLink != '') && 
                                    <><a href={codeLink} style={{ color: 'white'}}>Run the Source Code</a></>  
                                }

                            </TextWrapper>
                        </Column1>
                        
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    
                    </InfoRow>
                </InfoWrapper>
            </MeetingContainer>  
        </>
    )
}

export default MeetingSection