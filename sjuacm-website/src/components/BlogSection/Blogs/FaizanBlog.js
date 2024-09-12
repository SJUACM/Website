import React from 'react'
import {BlogContainer, BlogContainer2, BlogContent, BlogTitle, BlogAuthor, BlogDate, BlogText, BlogText2, BlogTextContainer, BlogImg, BlogImg2, ImgWrap} from '../BlogElements';
import bbg from '../../../img/blogPics/FaizanBlog/bbg.jpg'
import mike from '../../../img/blogPics/FaizanBlog/mikebloomberg.jpg'
import cnnmodel from '../../../img/blogPics/FaizanBlog/cnnmodel.png'
import stockgrader from '../../../img/blogPics/FaizanBlog/stockgrader.png'
import invwebapp from '../../../img/blogPics/FaizanBlog/inv_webapp.png'
import googlesheet from '../../../img/blogPics/FaizanBlog/googlesheet.png'

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
                        
                        <BlogDate>
                            Published: 5/15/2022
                        </BlogDate> 


                </BlogContent>

          </BlogContainer>

        <BlogContainer2>            
            <BlogTextContainer>
                
                <BlogText>
                    As a current senior at SJU and just a week away from graduation, I wanted to take some time to reflect on these past four years. College has been an incredibly challenging yet rewarding journey that I am truly grateful for. Although I am excited to finally start my career, I’ll definitely look back at this time in my life and miss the freedom and experiences I had. If you are a current student reading this, cherish your time in college but also make the most of it! 
                </BlogText>

                <BlogText2>
                    I wanted to write this blog post to highlight how difficult it is to break into Tech. Despite what we see all over social media, navigating the current job market and securing an offer has become an incredibly exhausting and strenuous process. Applying for jobs and preparing for interviews has become extremely demanding, becoming a full time job in it of itself. For both of my internships, it took nearly 4 months from when I first started applying to receiving an offer, with 200+ and 300+ applications submitted each year, respectively. After hundreds of rejections and most of the time not even hearing back from companies, I want to shed some light on how competitive the job market has become. Being a first generation college student with no family members or friends in the industry, these were all things I had to figure out on my own. I hope everyone can learn something from my experiences and benefit from it, especially if you are also first gen. 
                </BlogText2>

                <BlogText2>
                    In order to tell my story of how I landed my internships, I need to start from the very beginning - my freshman year in 2018. I believe my experiences starting from freshman year have been consequential in every subsequent step of my journey. Like a domino effect, one thing led to another - if one thing did not happen, it would prevent other things from happening. This is why I think it's important for me to start from the beginning. 
                </BlogText2>

                <BlogText2>
                    I came into SJU with a fascination for Computer Science, as I have always wondered how apps like Instagram and Snapchat are built. I was always curious about how large scale systems and production-grade software are developed, and I would read up on the engineering behind them. At this point in my freshman year, I was comfortable programming in Java as I took AP Computer Science in high school, but I was eager to continue expanding my skill set. Coding has always been something that I am extremely passionate about, simply because it gives me the ability to bring my ideas into reality. If you know how to code, the possibilities are endless in terms of what you can make. I knew I wanted to pursue a career that involved coding, which is when I realized that I have to try to land an internship and gain real world experience. I have always been pressured by my parents to get a good job and to become successful, and I knew getting an internship would be the first step in that process. 
                </BlogText2>

                <BlogText2>
                    That was when I first made a LinkedIn account and started my internship search. I soon realized that most internships are meant for rising seniors, and at the time, I was not aware of internships specifically meant for freshman / underclassmen such as Uber STAR, Microsoft Explore, Google STEP, and Facebook University. Nevertheless, I applied for nearly 100 positions and expectedly, I was rejected from every single one. I did not get any interviews, just emails that said "after careful consideration, we have unfortunately decided not to move forward with your candidacy at this time." At this point, I knew that I had to make myself stand out in some way so that I could land an internship the following year. This was when I started learning Python and working on various personal projects. With its verbose and English-like syntax, it was very simple to learn and allowed me to work on projects that would be much more difficult to do in Java.
                </BlogText2>

                <BlogText2>
                    My first few projects involved web scraping - automatically extracting data from websites. During this time, I was also learning about the stock market and developing a passion for finance in general, so I yearned to combine these two interests of mine. Eventually, I developed a program that would scrape stock data from Yahoo Finance and with an algorithm I came up with, the program would grade each stock out of 100, based on over 20 different metrics. I would run this program to scrape data for every single stock in the stock market and grade it out of 100, and then output the results to an Excel file (see below for an example of the program's output, note the "Overall Rating" column). By doing this, I saved a ton of time because I automated the research process I was using to find the best stocks to invest in. I firmly believe this project got me my internship at Bloomberg, but more on that later! You can check out the full source code for the project on my GitHub <a href="https://github.com/faizancodes/Automated-Fundamental-Analysis" style={{'color' : 'white'}}>here</a>.
                </BlogText2>

                <BlogImg2 src={stockgrader}/>

                <BlogText2>
                    While I was working on that project, I was in Dr. Yadav’s Intro to Data Structures Class, where one day he asked if any of us would be interested in doing research over the summer. Knowing that I did not have any plans for the summer, I raised my hand and he took note of my name. Within the next few weeks, I was officially accepted into SJU’s Summer Research Program and was going to be working under Dr. Keshtkar! Looking back now, that was undoubtedly the most consequential moment from my time at St. John’s (this will become more clear as you keep reading). At the start of the summer, I met with Dr. Keshtkar to discuss what research project I will be working on over the course of the next few months. After showing him some of the projects I was working on in Python, with most of them being related to finance such as quantitative analysis and algorithmic trading, he allowed me to continue working under that domain. 
                </BlogText2>

                <BlogText2>
                Over that summer, I worked on a web application using Python, JavaScript, and Flask that provides insights on investment strategies, which you can check out <a style={{'color' : 'white'}} href="https://github.com/faizancodes/Investment-Insights-Web-App">here</a>. It featured a personalized portfolio builder (see below of a screenshot), risk vs return analysis, a stock screener, and more. 
                </BlogText2>

                <BlogImg2 src={invwebapp}/>
                
                <BlogText2>
                While I did enjoy working on this project over the summer, I was eager to learn about something I was always curious about - machine learning. After expressing this interest to Dr. Keshtkar, he suggested that I enroll in a graduate class: CUS 610 Data Mining & Predictive Modeling, which would teach me the fundamentals of machine learning. Although I was extremely intimidated by the thought of being in a graduate level class as a mere sophomore in undergrad, I decided to take it on.
                </BlogText2>

                <BlogText2>
                    Within the next couple days, I was registered for the class and I was set to start my Fall 2019 semester. Going into CUS 610 and seeing everyone much older and more experienced than I am led to me developing imposter syndrome. The majority of the students in the class were working full-time jobs while I was still trying to figure out what college is about. I was clearly nowhere near the academic level needed to be in the class, I was just in it because I showed an interest and passion for the material. And looking back now, I realize that passion is all I needed. If any of you reading this are experiencing imposter syndrome or just lacking self confidence when it comes to academics, know that passion and a strong work ethic will get you much farther in life than being naturally smart ever will. 
                </BlogText2>

                <BlogText2>
                    Although I was the youngest person in CUS 610, I made sure that did not discourage me, and I ended up doing really well in the class. While the material was very difficult, I was able to leverage my programming knowledge and experience to excel in assignments. The class gave me a solid understanding of the fundamentals of machine learning, but I was eager to learn even more. After discussing with my advisor, I was registered for another graduate class - CUS 635 Web Data Mining for the Spring 2020 semester. I decided that this was my best move because it was another graduate class for the Master’s in Data Science degree, which I was extremely interested in pursuing since it aligns so well with career goals. I am currently pursuing the M.S. in Data Science as part of the 5 year combined degree program, and I have to say it has been one of the most beneficial things I have done. 
                </BlogText2>

                <BlogText2>
                    Going into the Spring 2020 semester, I was feeling much more confident in myself. Over the winter break, I started working on projects in Python involving ML to gain a deeper understanding of it. I was getting more familiar with concepts such as classification, clustering, and how to apply them to real data. CUS 635 taught me another fascinating area within ML - Natural Language Processing (NLP). I learned how to mine text data and generate insights from it. We used techniques such as tf-idf, topic modeling, n-grams, and more to analyze the contents of news articles. However, towards the end of the semester, as we all know, the world was turned upside down due to COVID and everything went remote. Although I was much more concerned about my family’s health at this time, the thought of once again not having an internship for the summer was troubling me. This was a difficult time for everyone, so I wasn’t that upset with myself since most companies had stopped hiring and the economy was in a free fall.
                </BlogText2>

                <BlogText2>
                    With most of summer 2020 being spent in quarantine, I had all the time in the world to continue exploring my interests. After reading more about machine learning and how it's applied, I developed an interest for a specific domain within ML - Computer Vision. The idea that a computer could be able to “see” like a human and carry out the functions of human vision was absolutely fascinating to me. One day, when researching computer vision applications, I came across a dataset on Kaggle - a website where ML datasets are posted - which contained hundreds of chest x-ray images of hospital patients who have COVID-19, Viral Pneumonia, or are in normal condition. At that point, I was also learning about Convolutional Neural Networks (CNN) and how to create them in Python. I soon realized that the dataset I found on Kaggle would be perfect to use for a project where I utilize a CNN model to classify if a patient has COVID-19, Viral Pneumonia, or is normal based on their chest x-ray. I turned this idea into a reality - where over the course of the next few weeks, I spent night and day working on developing a CNN model to classify the x-ray images. 
                </BlogText2>

                <BlogText2>
                    After dozens of hours of training the model, testing it, and debugging my code, I was getting around 85% accuracy with my model, which meant that the model correctly classified the condition of a patient - whether they have COVID, Viral Pneumonia, or are normal 85% of the time. Although this level of accuracy was decent, I knew it could be improved. This was when I reached out to Dr. Keshtkar to give him an overview of the project and asked if he knew how I could improve the model. He gave me a couple suggestions for what I could do, and was overall impressed with my work. In fact, he wanted me to write a research paper on the project, which was extremely intimidating to me since I had no idea what goes into a research paper. I had never even read a research paper, let alone know what an abstract is. I was under the assumption that I would have to provide and explain all the math that goes into the machine learning process, CNN model architecture, and other elements of the project, which I simply did not know how to do. 
                </BlogText2>

                <BlogText2>
                    Although I could’ve easily backed out of the idea of writing a research paper, I chose to go through with it. I think this is extremely important to highlight because when Dr. Keshtkar suggested that I write a research paper on the project, I immediately dismissed that idea in my mind and told myself there’s no way I could do that. However, I eventually told myself that I couldn't back out of a challenge without even attempting it first. I really want to stress this point because I think success in general can be reached by having the right mentality. If you tell yourself you can’t do something then you won’t do it. If you tell yourself that you can do something even though it'll be difficult, then you’ll do it. Working under the assumption that you can achieve something is essential, having self doubt can prevent you from achieving great things. So, over the course of 3 months, I implemented Dr. Keshtkar’s suggestions and through more trial and error in adjusting the CNN model architecture, I achieved an accuracy of 93% for the model (see below for the final architecture!), and had written the research paper on the project. 
                </BlogText2>

                <BlogImg2 src={cnnmodel}/>

                <BlogText2>
                    In 3 months I achieved something I thought I had no chance of pulling off. The paper was completed and although several changes had to be made in order for it to be accepted into the journal Dr. Keshtkar submitted to - ACM Digital Government, it did eventually get published in January 2021 and you can check it out <a style={{color: "white"}} href="https://dl.acm.org/doi/pdf/10.1145/3431804">here</a>. Looking back now, this is definitely my biggest achievement - mostly because I had no clue what Computer Vision was before working on the project, it was just something I started working on out of pure curiosity. Currently, my paper has been cited 6 times, something that I still can't wrap my head around. Knowing that my work has been used to advance scientific research is something that truly makes me happy. 
                </BlogText2>

                <BlogText2>
                    With the research paper under my belt, I was set to start the Fall 2020 semester. Given that this was the start of my junior year, I knew I had to put in the most effort this time to land an internship for the summer. I was finally able to apply to all the internships that I couldn’t apply to before simply because I was an underclassman. I started applying to internships early on - starting from the end of August. I applied to every company I found on LinkedIn, Handshake, and Indeed. I also kept revising my resume because I knew it had to have the right keywords and phrases in order to pass the ATS screening. The Fall 2020 semester also marked the start of my journey at SJU SATA (Student Advancement of Technology Association) as Vice President. SJU SATA was simply the combination of the Computer Science and Cyber Security clubs at SJU, it is what SJU ACM is today, only that we are now recognized as an ACM Student Chapter. 
                </BlogText2>

                <BlogText2>
                    Being VP of SJU SATA was an incredibly fulfilling and beneficial experience for me - I got used to leading virtual meetings and being able to speak to an audience. I have always struggled with public speaking, but this was my opportunity to break out of my shell and really improve my communication skills, even though it was all done virtually. This experience really helped me when interviewing - I became really confident in my speaking skills and being able to sell myself as a good candidate. The next couple of months were rough, however, as I was getting rejected from most of the positions I was applying for or just wasn’t hearing back from companies. For the positions where I did move on to the second round of the interview process, I was getting rejected after completing the coding challenges. This was a very difficult time for me, especially since I thought I had a good resume - with my experience doing research from the two years prior and multiple projects involving machine learning. I thought that resume was enough to atleast get past ATS screeners, but it was failing to do so most of the time.
                </BlogText2>

                <BlogText2>
                    Over the course of the Fall 2020 semester, I applied to over 200 internship positions and throughout that time, there was one internship in particular that I wanted the most - Bloomberg Global Data Analyst. Since I am extremely passionate about finance and have worked on countless python projects involving stocks / investment research, I knew Bloomberg would be the perfect company for me to work at, and one where I knew I could bring value. Bloomberg was one of the very few companies where I got to interview at, the others include Bank of America, Morgan Stanley, Jefferies, and Nasdaq. I don’t think it's a coincidence that those are all financial firms - my resume at the time definitely made me a good candidate for those companies given my personal projects in the domain. 
                </BlogText2>

                <BlogText2>
                    I applied to Bloomberg on October 17, 2020 and I was faced with a long interview process that stretched the course of two months. After my initial application, I received an email notifying me to complete an assessment on the Plum platform, which was meant to gauge my personality, social intelligence and problem solving abilities. I was asked hypothetical questions about work situations and I had to pick the option that I would most likely perform if I were on the team. A week after completing the Plum assessment, I received an email notifying me that I’d moved on to the next step of the interview process. I had to now complete a virtual interview - one where I had to record my answers to typical interview questions. This was something I was familiar with doing, since all the other banks I applied to require you to complete the same style of interviews - mostly on the HireVue platform. I always make sure to write down my answers to common interview questions and to have my resume in front of me so I know what to say. A complete understanding of your resume and background is essential in order to do well in these interviews.
                </BlogText2>

                <BlogText2>
                    For the virtual interview for Bloomberg, I had to answer 5 questions - tell us about yourself, what is your understanding of the role and why are you interested in this particular opportunity, give us an example of a project you’ve worked on that involved a large amount of data and explain how you executed, tell us about an area of the financial markets that you are passionate about and why, and what programming languages and/or data analysis tools are you experienced with. For each of these questions, I had 90 seconds to provide an answer. I also did not know the questions I was going to be asked beforehand, I was given the question prompt and then had 30 seconds to prepare an answer. Within that time, I made sure to write down my thoughts and when the time started to answer, I read whatever I wrote and then expanded on it.
                </BlogText2>

                <BlogText2>
                This worked well for me because a month later on November 30, I got selected for a super day at Bloomberg. This consisted of 3 separate sessions all in the same day - the first one being “process re-engineering” where I was given a diagram of a workflow and I had to explain how to improve  / optimize it. Then I was given a technical test consisting of around 15 questions involving SQL, Python, and general statistics. The last session was an interview with a Global Data team manager - I was asked basic behavioral questions and a few finance related questions. Two days after the Bloomberg super day, I was selected for a final round interview with two more team managers. 
                </BlogText2>

                <BlogText2>
                    At this point, I was completely exhausted. I was juggling 6 classes, preparing and leading meetings for SJU SATA, and applying to dozens of internships everyday. I wasn’t in the interview process with any other companies at the time and I was just getting rejected from all the other positions I was applying for. I scheduled my final Bloomberg interview for December 10th, which gave me time to prepare. I knew that would also be the start of finals week, but I was left with no other option. I spent that entire week preparing the most I could, because I knew this was my last shot - I had no other interviews lined up and besides, this was the internship I wanted the most.
                </BlogText2>

                <BlogText2>
                The day of my final Bloomberg interview came, and I was able to deliver. I remained confident and was able to answer all the questions. In the interview, I made sure to mention the stock rating program that I worked on, which grades every stock in the market out of 100 based on over 20 different metrics. I explained the grading algorithm I came up with, and I firmly believe this is what made me stand out. The interviewers were definitely impressed with my description of the project and to my delight, 5 days later I got a call letting me know I got an offer! I was absolutely ecstatic, I had gotten the internship I wanted the most after hundreds of rejections and months of mental struggles. I signed the offer letter the same day that I received it, and was able to enjoy my holiday break knowing that I finally achieved my goal of landing an internship. 
                </BlogText2>

                <BlogText2>
                    My internship at Bloomberg as a Global Data Analyst was an absolutely incredible experience. I became close with my team members, got to learn about production-grade workflows, developed interactive dashboards with Python within the BQuant environment, and collaborated with the Bloomberg News team to facilitate the creation of data-driven news stories. This was my first experience working in a corporate setting, and although it was fully virtual, I believe I made the most out of the internship through daily meetings with my team and other peers at the company. I have to say, the highlight of the internship was definitely my visit to the NYC headquarters and hearing from Mike Bloomberg himself (see below!)
                </BlogText2>

                
                <BlogImg2 src={mike}/>
                
                <BlogText2>
                    I had such an incredible experience at Bloomberg because it perfectly intertwined my passion for Computer Science and Finance. I was put on the Company Fundamentals team, and I was able to really thrive within it because I understood the data that my team was in charge of, I had the domain knowledge. I knew what metrics such as P/E ratio, operating margin, return on assets, etc. meant from a financial perspective and how they are calculated. Having domain expertise is essential in order to succeed in a data-oriented role. If you don’t understand the data, you can’t effectively analyze it. I was able to leverage my domain knowledge in order to create interactive dashboards in Python, because I knew what metrics to look at and compare across companies and sectors. This is advice I give to other Computer Science students who are not really interested in coding - combine CS with another one of your interests. If you love going to the gym, try working on a project where you analyze your gym performance / eating habits. The key is to make it data-driven, so you can effectively track your progress. This is just a simple example, but the key is to work on projects like that so you have a strong resume and stand out in interviews.  
                </BlogText2>

                <BlogText2>
                    Although I had an amazing internship experience at Bloomberg, there were several factors that prevented me from going through with my offer to return full time. This was a very unfortunate and difficult decision for me to make, and it meant that I no longer had a job lined up for the following summer. At this point, it is September 2021 and I was just starting my senior year.  I was taking 6 classes again and it was my first semester being President of SJU ACM, something which I honestly prioritized over everything. I struggled to find the time to apply to jobs everyday, I dreaded the job hunt because of how tough it was the previous year. But I have to say, this time I was a lot more confident since I had Bloomberg on my resume. I thought that would get me a lot more interviews and land an offer much quicker than last year. Although this was partially true, it was still very tough to land interviews. 
                </BlogText2>

                <BlogText2>
                    Since I am in the 5 year program, I have a year of school left after my senior year to complete my Master's. This gave me the choice of trying to land another internship for the summer or try to land a full time job and work while taking my graduate classes the following year. So over the course of the Fall 2021 semester, I applied to around 100 internships/full time roles and truthfully, I got rejected from most or just did not hear back for most applications. I didn't even get a single interview. 
                </BlogText2>

                <BlogText2>
                    This again was a mentally exhausting process, it was worse than the previous year because I wasn’t getting any success even with a big name on my resume. I was starting to lose all the self confidence I had before. At this point, I should’ve just focused on networking and getting a referral from someone, but truthfully, I did not like the idea of just reaching out to someone with the sole purpose of getting a referral in the end. I did not have any genuine connections or friends at companies I was interested in, so that made it even more difficult.
                </BlogText2>

                <BlogText2>
                    So, after the conclusion of the Fall 2021 semester, I focused solely on my job search. I made sure to optimize my resume and add in as many keywords as I could. I was on LinkedIn, Handshake, and Indeed all day everyday just applying to different positions. I should note that I was mainly applying to top companies, I did want a name as big as Bloomberg or ideally something bigger for my next role. This clearly made things a lot harder for me, since that meant I was only applying to really competitive companies and for positions which hundreds if not thousands of other people are applying to. I kept track of my applications using Google Sheets (see below), where I wrote down the each position I applied for, along with the company, and my current stage of the interview process. The red cells indicate a rejection and cells with nothing in the "Process" column meant that I did not hear back. The screenshot below shows how my first 35 applications went.   
                </BlogText2>

                <BlogImg2 src={googlesheet}/>
                
                <BlogText2>
                    From late December to March, I consistently applied to 10+ positions everyday, reaching 300+ applications total. Throughout the rejections, I did eventually land interviews for Twitter, Salesforce, BlackRock, Amazon, DocuSign, and a couple other companies. That was proof to me that Bloomberg really was a valuable experience because I was not landing these many interviews the year before, and especially not with companies of that caliber. Out of those companies, I was most excited for Twitter - that was my first ever actual Software Engineering interview. It consisted of two coding rounds - one hour each and a 45 minute behavioral interview all on the same day. Out of all the interviews I’ve ever done, I definitely spent the most time prepping for this one. I find the engineering behind Twitter to be fascinating and I love the overall culture of the company. I knew if I could land the internship, I could get a return offer and get paid $190k as a new grad, so the stakes were very high. 
                </BlogText2>
                
                <BlogText2>
                    Long story short, after weeks of preparation for my Twitter interview, and thinking I performed well in the actual interviews, I was rejected. Out of all the rejections I’ve gotten, this one definitely hurt the most because of all the time I spent preparing and how much I liked the company. This really took a toll on me mentally, but I knew I had to keep my head up and try my best in the other interviews I had. Besides, I was able to land an interview from Amazon, which was a big deal for me because that would be my first ever interview from a FAANG company. My interview was for a Business Intelligence Engineer intern role, which my background and past experiences definitely aligned with. However, after reading through Glassdoor posts, I saw that the interview would consist of SQL questions and this was when I started losing hope. My SQL knowledge was very rusty because I haven’t reviewed it since taking the Database Management class my freshman year. To make things more difficult, I had an interview with Salesforce for a Technical Consultant position the day prior to my Amazon interview, which I was prioritizing. I thought that I had a much better chance of landing the Salesforce position, so I focused on preparing for that. 
                </BlogText2>
                
                <BlogText2>
                    I started prepping for my Amazon interview just the night before it. I reviewed the basics of SQL commands and worked my way up to more complex ones. However, I wasn’t fully grasping join commands and especially not window functions, and I knew those would be asked in the interview. Time was running out, and I decided to focus on reviewing Amazon’s leadership principles because I knew questions would be asked involving them. Truthfully, I was going into the interview with very low hopes of actually moving onto the next step of the process, let alone getting an offer. Like I said before, for me it was an achievement to land the interview in the first place because it meant my resume was strong enough to get past their ATS system. 
                </BlogText2>

                <BlogText2>
                    The day of my Amazon interview comes and I go in with the mentality that I probably won’t move on past this stage, but I am still going to try my absolute best. I knew regardless of the outcome, this would be an incredibly beneficial experience that I can leverage for any future interviews for similar roles. For the interview, I was scheduled for two 45 minute sessions with current BI engineers. The first session consisted of basic behavioral questions, along with a case study specific to Amazon. The second session is where my interviewer specifically asked me how well I know SQL on a scale from 1-10. I was honest and said around 5-6 because I don't have much experience using it, I instead primarily use Python for analyzing and querying data. My interviewer was understanding of this, as he asked me two basic SQL questions and then moved on to behavioral questions, which I was able to answer well. My internship experience at Bloomberg has definitely helped me in answering behavioral questions for all the interviews I’ve had, since I took on a leadership role and was faced with challenges, tight deadlines, and other scenarios which interviewers usually ask to provide examples for.
                </BlogText2>

                <BlogText2>
                    If you read the description for this blog post, you can probably guess by now that I did end up getting an offer from Amazon for the BI Engineer intern role. I am still in disbelief to this day as to how I did get the offer, since I came in with such low expectations and barely had knowledge of SQL. It was also the only offer I got, I got rejected from all the other positions I applied to. Looking back now, it was clearly my answers to the behavioral questions that made me stand out. I had a strong understanding of Amazon's leadership principles and I tried to incorporate them into each of my answers. This is where having a deep understanding of the company you’re interviewing at comes to your advantage. Amazon is obsessed with customer satisfaction and promotes constant learning and curiosity. These are things interviewers want to hear about in your answers.  I kept those things in mind when answering the behavioral questions and clearly it must’ve worked out. 
                </BlogText2>

                <BlogText2>
                    At this point, we’ve reached the current day - the end of the Spring 2022 semester and a week away from graduation. I still can’t believe how fast these past 4 years have flown by. I am glad I still have a year left to complete my Master’s in Data Science so I can cherish the college experience for the last time. As I mentioned before, I am truly grateful for being in the 5 year program because it allowed me to take on another internship before finishing college, which is really going to pay off after graduation when I am looking for another opportunity. 
                </BlogText2>

                <BlogText2>
                    I hope at this point it's clear how each step of my journey led to the next. If I didn’t do the summer research with Dr. Keshtkar, I likely wouldn’t have been in the 5 year program and likely would not have ended up publishing a peer reviewed research paper. That research experience helped boost my resume so that I could eventually land my Bloomberg internship, which in turn helped me land my Amazon internship. This is why the best piece of advice I can give to students, especially underclassmen, is to work on research with Professors. It can be as beneficial as an internship and it gives you hands-on experience which will pay off in future interviews. Before landing my Bloomberg internship, my research and personal projects were the only relevant experience I had. 
                </BlogText2>

                <BlogText2>
                    As I mentioned before, I wanted to write this blog post to share my story and to show the reality of breaking into Tech. Sure, it would’ve been a lot easier if I networked and got referrals, but that is easier said than done. Referrals will get you interviews, but you still have to pass them. Interviews for technical positions, especially for software engineering, are extremely difficult and take weeks or even months to prepare for. This is the unfortunate reality that a lot of Computer Science students will face when navigating the job market, since it is more competitive than ever before. 
                </BlogText2>

                <BlogText2>
                    What I want to stress is that throughout the months of applying and interviewing, I remained hopeful, I knew I would eventually land something that I really wanted, which ended up happening. Having self confidence is absolutely essential for achieving your goals. If you don't believe in yourself, then who will? I also am a firm believer that you can achieve anything in life, it just depends on how bad you want it and how much you’re willing to sacrifice for it. This was the mentality I had when I was trying to get my internships. Whenever I got rejected after an interview - I told myself that I didn't want it bad enough and that I didn’t prepare for it enough. If you're wondering why you don't have what you want yet, ask yourself: how bad do you want it? How much are you willing to sacrifice for it?
                </BlogText2>

                <BlogText2>
                    I hope this blog post was insightful and gives you hope if you are currently in the job hunt. Although it will be extremely tough, enjoy the journey and the grind. Because when you finally achieve your goals, the days of struggle will strike you as the most beautiful.    
                </BlogText2>
                                            
            </BlogTextContainer>
        </BlogContainer2>            

    </>
    );
}

export default FaizanJourneytoBTBlog;