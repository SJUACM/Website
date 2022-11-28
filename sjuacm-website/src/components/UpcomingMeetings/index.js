import React from 'react'
import { Button } from '../ButtonElements'
import { TitleContainer, UpcomingMeetingContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Heading2, Subtitle, BtnWrap, ImgWrap, Img, UpcomingMeetingsTitle } from './UpcomingMeetingElements'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {upcomingMeetings} from './data'


function addUpcomingMeeting({date, time, location, name, description}) { 
    
    return (
        <UpcomingMeetingContainer>
            <TextWrapper>
                <TopLine>{date}</TopLine>
                <TopLine>{time}</TopLine>
                <Heading2>{location}</Heading2>
                <Heading>{name}</Heading>
                <Subtitle>{description}</Subtitle>
            </TextWrapper>
        </UpcomingMeetingContainer>
    )
}

const UpcomingMeetingsSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, margin_top}) => {
    return (
        <>  
        {(upcomingMeetings.length != 0) &&   
            <>                      
            <TitleContainer >
                <UpcomingMeetingsTitle>
                    Upcoming Meetings
                </UpcomingMeetingsTitle>
            </TitleContainer> 

                <>
                {upcomingMeetings.map(addUpcomingMeeting)}
                </>
            </>
        }
        </>
    )
}

export default UpcomingMeetingsSection
