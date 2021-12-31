import React from 'react'
import { EboardContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Heading2, Subtitle, ImgWrap, Img, EmailText, IconContainer } from './EboardElements'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EboardSection = ({name, position, major, gradYear, email, linkedIn, achievements, img, margin_top, alt_margin}) => {
    return (
        <>
            <EboardContainer alt_margin={alt_margin} style={{marginTop : margin_top }}>
                <InfoWrapper>
                    <InfoRow>
                        
                        <Column1>
                            <TextWrapper>
                                <TopLine>{position}</TopLine>
                                <Heading onClick={() => window.location.href=linkedIn}>{name}</Heading>
                                <Heading2>{major}, {gradYear}</Heading2>
                                
                                {achievements.map(function(a){
                                    return <Subtitle>- {a}</Subtitle>;
                                })}
                                
                                <div>
                                    <IconContainer>
                                        <FontAwesomeIcon icon={faLinkedin} cursor='pointer' onClick={() => window.location.href=linkedIn} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '1.2rem', marginTop : '0px'}} /> 
                                        <EmailText id="text" style={{color : 'white', marginLeft : '15px', letterSpacing : '1.1px'}}>{email}</EmailText>
                                    </IconContainer>
                                </div>

                            </TextWrapper>
                        </Column1>
                        
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    
                    </InfoRow>
                </InfoWrapper>
            </EboardContainer>  
        </>
    )
}

export default EboardSection
