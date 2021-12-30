import React from 'react'
import {CardContainer, CustomCard, CustomCardImg, CustomCardBody, CustomCardTitle, PrevEboardTitle, CustomCardTitle2, IconContainer, InfoWrapper, EmailText} from './PrevEboardElements'
import {prevEboardMembers} from './data'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function addEboardMember({name, gradYear, major, img, linkedIn, email, margin_top}) {
    
    return (
        <CustomCard style={{marginTop : '0px', padding : '55px'}}>
            <CustomCardImg src={img}/>
            <CustomCardBody>
                <CustomCardTitle onClick={() => window.location.href=linkedIn}>{name}</CustomCardTitle>
                <CustomCardTitle2>{major}, {gradYear}</CustomCardTitle2>
                <div>
                    <IconContainer>
                        <FontAwesomeIcon icon={faLinkedin} cursor='pointer' onClick={() => window.location.href=linkedIn} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '1.2rem', marginTop : '0px'}} /> 
                        <EmailText id="text" style={{color : 'white', marginLeft : '15px', letterSpacing : '1.1px'}}>{email}</EmailText>
                    </IconContainer>
                </div>
            </CustomCardBody>
        </CustomCard>
    )
  }

const PrevEboardSection = () => {
    
    return (
        <>  
            <CardContainer>
               <InfoWrapper>
                <PrevEboardTitle style={{textAlign : 'center', marginTop: '-1650px', paddingBottom : '75px'}}>Previous E-Board Members</PrevEboardTitle>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {prevEboardMembers.map(addEboardMember)}
                    </div>
                </InfoWrapper>
            </CardContainer>
        </>
    )
}

export default PrevEboardSection