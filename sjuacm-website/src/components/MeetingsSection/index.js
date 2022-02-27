import React from 'react'
import { Button } from '../ButtonElements'
import { DropdownSection, DropdownContainer, MeetingContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, LinkWrapper,  TopLine, Heading, Subtitle, ImgWrap, Img } from './MeetingElements'
import {meetings} from './data'

import { useMemo, useState } from "react";  
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';  

const semesters = ['All', 'Spring 2022', 'Fall 2021', 'Spring 2021', 'Fall 2020']
  

function addMeeting({date, name, description, slidesLink, codeLink, slidesName, youtubeLink, customMessage, customLink, img, margin_top, margin_left, alt_margin, alt_, start_sem}) { 
    
    return (
        <MeetingContainer start_sem={start_sem} alt_={alt_} alt_margin={alt_margin} marginTop={margin_top}>
            
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
            
                            <TopLine>{date}</TopLine>
                            <Heading>{name}</Heading>
                            <Subtitle>{description}</Subtitle>
                            
                            <LinkWrapper>
                                {(slidesLink != '' && codeLink != '') && 
                                    <><a href={slidesLink} download={slidesName} style={{ color: 'white' }}>Download Slides</a><a href={codeLink} style={{ color: 'white', marginLeft: '40px' }}>Run the Source Code</a></>  
                                }

                                {(slidesLink != '' && codeLink == '') && 
                                    <><a href={slidesLink} download={slidesName} style={{ color: 'white' }}>Download Slides</a></>  
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
                
            </InfoWrapper>
        </MeetingContainer>
    )
}



const MeetingSection = ({semester}) => {
    
    const filteredData = useMemo(() => {  
        if (!semester || semester === "All") return meetings;  
    
        return meetings.filter(item => item.semester === semester);  
    }, [semester]);  
    
    return (
        <>  
            {filteredData.map(addMeeting)}
         
        </>
    )
}

export default MeetingSection