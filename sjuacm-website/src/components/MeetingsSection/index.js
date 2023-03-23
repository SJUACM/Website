import React from 'react'
import { MeetingContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, LinkWrapper,  TopLine, Heading, Subtitle, ImgWrap, Img, TitleContainer, PastMeetingsTitle } from './MeetingElements'
import { CarouselContainer } from './MeetingElements.js'
import {meetings} from './data'
import {upcomingMeetings} from '../UpcomingMeetings/data'

import { useMemo } from "react";  
import 'react-dropdown/style.css';  
import { MeetingCarousel } from '../Carousel'
import UpcomingMeetingsSection from '../UpcomingMeetings'

function addMeeting({date, name, description, slidesLink, codeLink, slidesName, youtubeLink, customMessage, customLink, img, carousel, margin_top, margin_left, alt_margin, alt_, start_sem}) { 
    
    return (
        <MeetingContainer start_sem={start_sem} alt_={alt_} alt_margin={alt_margin} marginTop={margin_top}>
            
            <InfoWrapper>
                <InfoRow>
                    <Column1 margin_left={margin_left}>
                        <TextWrapper>
            
                            <TopLine>{date}</TopLine>
                            <Heading>{name}</Heading>
                            <Subtitle>{description}</Subtitle>
                            
                            <LinkWrapper>
                                {(slidesLink !== '' && codeLink !== '') && 
                                    <><a href={slidesLink} download={slidesName} style={{ color: 'white' }}>Download Slides</a><a href={codeLink} style={{ color: 'white', marginLeft: '40px' }}>Run the Source Code</a></>  
                                }

                                {(slidesLink !== '' && codeLink === '') && 
                                    <><a href={slidesLink} download={slidesName} style={{ color: 'white' }}>Download Slides</a></>  
                                }
                                
                                {(slidesLink === '' && codeLink !== '') && 
                                    <><a href={codeLink} style={{ color: 'white'}}>Run the Source Code</a></>  
                                }

                                {(youtubeLink !== '') && 
                                    <><a href={youtubeLink} style={{ color: 'white'}}>Watch the Recording on YouTube</a></>  
                                }

                                {(customMessage !== '') && 
                                    <><a href={customLink} style={{ color: 'white'}}>{customMessage}</a></>  
                                }

                            </LinkWrapper>
                        </TextWrapper>

                    </Column1>

                    <Column2>
                        {carousel ? (
                        <CarouselContainer>
                                <MeetingCarousel carousel={carousel}/>
                        </CarouselContainer>
                        ):(
                        <ImgWrap>
                            <Img src={img}/>
                        </ImgWrap>
                        )}
                    </Column2>
                
                </InfoRow>
                
            </InfoWrapper>
        </MeetingContainer>
    )
}



const MeetingSection = ({semester}) => {
    
    const filteredData = useMemo(() => {  
        if (!semester || semester === "All") return meetings;  
    
        if (semester !== "Upcoming") return meetings.filter(item => item.semester === semester);  
    }, [semester]);  
    
    return (
        <>
            {(!semester || semester === "All" || semester === "Upcoming") && 
                <> 
                    <UpcomingMeetingsSection />
                    <>
                        {(semester !== "Upcoming" && upcomingMeetings.length !== 0) &&
                            <TitleContainer>
                                <PastMeetingsTitle>Past Meetings</PastMeetingsTitle>
                            </TitleContainer>
                        }
                    </>
                </>
            }
            {(semester !== "Upcoming") &&
                <>
                    {filteredData.map(addMeeting)}
                </>
            }
        </>
    )
}

export default MeetingSection