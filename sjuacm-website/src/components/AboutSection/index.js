

import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {AboutPageContainer, AboutPageContent, AboutPageHeader, AboutPageText, AboutPageImg, InfoRow} from './AboutElements';
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
                  
                  <AboutPageHeader style={{marginTop: '165px'}}>
                      As an official Student Chapter of the <a href="https://www.acm.org/" style={{'color' : 'white'}}>Associaton for Computing Machinery (ACM)</a>, we are St. John's University's largest student organization for Computer Science & Cyber Security. 
                  </AboutPageHeader>


                  <AboutPageText style={{marginTop: '-20px'}}>
                    We aim to enhance the experience of SJU tech students by providing them with a platform to learn, share, and collaborate through our labs and presentations. 
                  </AboutPageText> 

                  <div style={{textAlign: 'right'}}>
                    <AboutPageImg src={AboutPagePic}/>
                  </div>

                </InfoRow>

                <AboutPageText style={{marginTop : '-150px'}}>Check out our social medias:</AboutPageText>
                <SocialMedia />

               
                
            </AboutPageContent>

              
          </AboutPageContainer>
        </>
    );
}


export default AboutPage;