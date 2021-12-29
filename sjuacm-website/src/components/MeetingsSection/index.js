import React from 'react'
import { Button } from '../ButtonElements'
import { MeetingContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, LinkWrapper,  TopLine, Heading, Subtitle, ImgWrap, Img } from './MeetingElements'
import {
    faYoutube,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MeetingSection = ({date, name, description, slidesLink, codeLink, youtubeLink, customMessage, customLink, img, margin_top, margin_left, alt_margin, semesterDivider}) => {
    return (
        <>
            <MeetingContainer alt_margin={alt_margin} style={{marginTop : margin_top }}>
                <InfoWrapper>
                    <InfoRow>
                        
                        <Column1 margin_left={margin_left}>
                            <TextWrapper>
                                
                                <TopLine>{date}</TopLine>
                                <Heading>{name}</Heading>
                                <Subtitle>{description}</Subtitle>
                                
                                <LinkWrapper>
                                    {(slidesLink != '' && codeLink != '') && 
                                        <><a href={slidesLink} download style={{ color: 'white' }}>Download Slides</a><a href={codeLink} style={{ color: 'white', marginLeft: '40px' }}>Run the Source Code</a></>  
                                    }

                                    {(slidesLink != '' && codeLink == '') && 
                                        <><a href={slidesLink} download style={{ color: 'white' }}>Download Slides</a></>  
                                    }
                                    
                                    {(slidesLink == '' && codeLink != '') && 
                                        <><a href={codeLink} style={{ color: 'white'}}>Run the Source Code</a></>  
                                    }

                                    {(youtubeLink != '') && 
                                        <><a href={youtubeLink} style={{ color: 'white'}}>Watch the Recording on YouTube</a></>  
                                    }

                                    {(customMessage != '') && 
                                        <><a href={customLink} style={{ color: 'white'}}>{customMessage}</a></>  
                                    }

                                </LinkWrapper>

                            </TextWrapper>
                        </Column1>
                        

                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    
                    </InfoRow>
                    
                    {(semesterDivider != null && semesterDivider.length > 1) &&
                        <h1 style={{marginTop: '50px', textAlign: 'center', color: 'white'}}>{semesterDivider}</h1>
                    }

                </InfoWrapper>
            </MeetingContainer>  
        </>
    )
}

export default MeetingSection