import React from 'react'
import {BlogContainer, BlogContainer2, BlogContent, BlogTitle, BlogAuthor, BlogText, BlogText2, BlogTextContainer, BlogImg, BlogImg2, TextWrapper, TextWrapper2, ImgWrap, ImgWrap2, Column1, Column2, InfoRow} from '../BlogElements';
import bbg from '../../../img/blogPics/bbg.jpg'



const FaizanJourneytoBTBlog = () => {
    return (
        <>
            <BlogContainer>
                <BlogContent>

                        <ImgWrap>
                            <BlogImg src={bbg}/>
                        </ImgWrap>
                    
                        <BlogTitle>
                            My Journey to Big Tech
                        </BlogTitle>

                        <BlogAuthor>
                            By: <a href="https://www.linkedin.com/in/faizan-ahmed-7ab0" style={{'color' : 'white'}}>Faizan Ahmed</a>
                        </BlogAuthor> 


                </BlogContent>

          </BlogContainer>

        <BlogContainer2>            
            <BlogTextContainer>
                
                <BlogText>
                    As a current senior at SJU and just a month away from graduation, I wanted to take time to reflect on these past four years. College has been an incredibly challenging yet rewarding journey that I am truly grateful for. Although I am excited to finally start my career, I’ll definitely look back at this time of my life and miss the freedom I had. If you are a current student reading this, cherish your time in college but also make the most of it! 
                </BlogText>
                
                <BlogText2>
                    I wanted to write this blog post to highlight how difficult it is to break into Tech. Despite what we see all over social media, navigating the current job market and securing an offer has become incredibly exhausting, strenuous, and downright brutal. Applying for jobs and preparing for interviews has become extremely demanding, becoming a full time job in it of itself. For both of my internships, it took nearly 4 months from when I first started applying to receiving an offer, with 200+ and 300+ applications submitted each year, respectively. After hundreds of rejection emails, getting ghosted dozens of times, and most of the time not even hearing back from some companies, I want to shed some light on the reality of breaking into Tech. Being a first generation college student with no family members or friends in the industry, these were all things I had to figure out on my own. I hope everyone can learn something from my experiences and be able to take value from it, especially if you are also first gen. 
                </BlogText2>
                
                <BlogText2>
                    In order to tell my story of how I landed my internships, I need to start from the very beginning - Freshman year (2018). I believe my experiences starting from freshman year have been monumental in every subsequent step of my journey. Like a domino effect, one thing led to another - if one thing did not happen, it would prevent other things from happening. This is why I think its important for me to start from the beginning. 
                </BlogText2>
            
            </BlogTextContainer>
        </BlogContainer2>            

    </>
    );
}

export default FaizanJourneytoBTBlog;