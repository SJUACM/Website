import React from 'react'
import { Button } from '../ButtonElements'
import { EboardContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Heading2, Subtitle, BtnWrap, ImgWrap, Img } from './EboardElements'
import {
    faLinkedin,
    faEmail
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EboardSection = ({name, position, major, gradYear, email, linkedIn, achievements, img, margin_top}) => {
    return (
        <>
            <EboardContainer style={{marginTop : margin_top }}>
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
