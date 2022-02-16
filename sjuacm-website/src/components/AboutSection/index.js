import React from 'react'
import {AboutPageContainer, AboutPageContainer2, AboutPageContent, AboutPageHeader, AboutPageText, AboutPageText2, AboutPageText3, AboutPageImg, AboutPageImg2, TextWrapper, TextWrapper2, ImgWrap, ImgWrap2, Column1, Column2, InfoRow} from './AboutElements';
import SocialMedia from '../SocialMedia';
import AboutPagePic from '../../img/aboutpage_pic.png';
import AboutPagePic2 from '../../img/lab_pic8.jpg';

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

          <AboutPageContainer2>
            <AboutPageContent>
                <InfoRow>
                  
                  <Column1>
                    <ImgWrap2>
                      <AboutPageImg2 src={AboutPagePic2}/>
                    </ImgWrap2>
                  </Column1>

                  <Column2>
                    <TextWrapper2>
                      <AboutPageHeader>
                          Operating under the Collins College of Professional Studies, SJU ACM is moderated by Dr. Joan DeBello and is supported by Professors across the Computer Science & Cyber Security departments. 
                      </AboutPageHeader>

                      <AboutPageText>
                        Our meetings are held on Thursdays during Common Hour (2:00 - 3:00 PM) in the Cyber Security Lab (Room 2-140A in the 2nd Floor of St. Augustine)
                      </AboutPageText> 
                      
                      <AboutPageText>
                        Our meetings are open to everyone, regardless of major or experience. We welcome everyone to join our community and share our love for technology!
                      </AboutPageText> 

                    </TextWrapper2>
                  </Column2>
                  
                </InfoRow>

                <AboutPageText2>
                    Our website is also completely open source!
                </AboutPageText2> 

                <AboutPageText3>
                    Check out the source code for this website on our GitHub <a href="https://github.com/SJUACM/Website" style={{'color' : 'white'}}>here</a>
                </AboutPageText3>

            </AboutPageContent>
      
          </AboutPageContainer2>
        </>
    );
}


export default AboutPage;