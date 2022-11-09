import React from 'react'
import { EboardContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Heading2, Subtitle, ImgWrap, Img, EmailText, IconContainer } from './EboardElements'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EboardSection = ({name, position, major, gradYear, email, linkedIn, github, achievements, img, margin_top, alt_margin, altFontSize, altPadding}) => {

    return (
        <>
            <EboardContainer alt_margin={alt_margin} style={{marginTop : margin_top }}>
                <InfoWrapper>
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
                                            {github ? (
                                        <a className="icon-link">
                                            <FontAwesomeIcon icon={faGithub} cursor='pointer' onClick={() => window.open(github, '_blank', 'noopener,noreferrer')} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '1.2rem', marginTop : '0px'}} />
                                            </a>
                                            ):(
                                            <FontAwesomeIcon/>
                                            )}
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
