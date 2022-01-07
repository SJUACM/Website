import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, margin_top}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} style={{marginTop: margin_top}} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark = {dark ? 1 : 0}
                                    dark2 = {dark2 ? 1 : 0}
                                    //onClick={event =>  window.location.href=id}
                                    to={id}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
