import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AboutPageContainer, AboutPageContent, AboutPageHeader, AboutPageText, AboutPageImg, TextWrapper, ImgWrap, Column1, Column2, InfoRow} from './AboutElements';
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import SocialMedia from '../SocialMedia';
import AboutPagePic from '../../img/aboutpage_pic.png';

const AboutPage = () => {
    
    return (
        <>
          <AboutPageContainer>
            <AboutPageContent>
                <InfoRow>
                  
                  <Column1>
                    <TextWrapper>
                      <AboutPageHeader>
                          As an official Student Chapter of the <a href="https://www.acm.org/" style={{'color' : 'white'}}>Associaton for Computing Machinery (ACM)</a>, we are St. John's University's largest student organization for Computer Science & Cyber Security. 
                      </AboutPageHeader>

                      <AboutPageText>
                        We aim to enhance the experience of SJU tech students by providing them with a platform to learn, share, and collaborate through our labs and presentations. 
                      </AboutPageText> 

                      <AboutPageText>Check out our social medias:</AboutPageText>
                      <SocialMedia />
                    </TextWrapper>
                  </Column1>

                  <Column2>
                    <ImgWrap>
                      <AboutPageImg src={AboutPagePic}/>
                    </ImgWrap>
                  </Column2>

                </InfoRow>

            </AboutPageContent>

              
          </AboutPageContainer>
        </>
    );
}


export default AboutPage;