import React from 'react'
import { TitleContainer, UpcomingMeetingContainer, TextWrapper, TopLine, Heading, Heading2, Subtitle, UpcomingMeetingsTitle } from './UpcomingMeetingElements'
import {upcomingMeetings} from './data'


function addUpcomingMeeting({date, time, location, name, description, link}) { 
    
    return (
        <UpcomingMeetingContainer>
            <TextWrapper>
                <TopLine>{date}</TopLine>
                <TopLine>{time}</TopLine>
                <Heading2>{location}</Heading2>
                <Heading>{name}</Heading>
                <Subtitle>{description}</Subtitle>
                {(link !== '') && 
                    <><a href={link} style={{ color: 'white'}}>Register here</a></>
                }
            </TextWrapper>
        </UpcomingMeetingContainer>
    )
}

const UpcomingMeetingsSection = () => {
    return (
        <>  
        {(upcomingMeetings.length !== 0) &&   
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
