import React from 'react'
import { EboardContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Heading2, Subtitle, ImgWrap, Img, EmailText, IconContainer } from './EboardElements'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {currentEboardMembers} from './data'

function addEboardMember({name, position, major, gradYear, email, linkedIn, achievements, img, imgPadding, imgPadding2, alt_margin, altFontSize, altPadding}) {
    return (
        <>
            <InfoRow>
                
                <Column1 altPadding={altPadding}>
                    <TextWrapper>
                        <TopLine altFontSize={altFontSize}>{position}</TopLine>
                        <Heading onClick={() => window.location.href=linkedIn}>{name}</Heading>
                        <Heading2>{major}, {gradYear}</Heading2>
                        
                        {achievements.map(function(a){
                            return <Subtitle altFontSize={altFontSize}>- {a}</Subtitle>;
                        })}
                        
                        <div>
                            <IconContainer>
                                <a className="icon-link">
                                    <FontAwesomeIcon icon={faLinkedin} cursor='pointer' onClick={() => window.open(linkedIn, '_blank', 'noopener,noreferrer')} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '1.2rem', marginTop : '0px'}} /> 
                                </a>
                                <EmailText id="text" style={{color : 'white', marginLeft : '15px', letterSpacing : '1.1px'}}>{email}</EmailText>
                            </IconContainer>
                        </div>

                    </TextWrapper>
                </Column1>
                
                <Column2 imgPadding={imgPadding} imgPadding2={imgPadding2}>
                    <ImgWrap>
                        <Img src={img}/>
                    </ImgWrap>
                </Column2>
            
            </InfoRow>
        </>
    )
}

const EboardSection = () => {
    return (
        <>
            <EboardContainer>
                <InfoWrapper>
                    <div>
                        {currentEboardMembers.map(addEboardMember)}
                    </div>
                </InfoWrapper>
            </EboardContainer>  
        </>
    )
}


export default EboardSection
