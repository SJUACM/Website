
import sweInterviewPrep from '../../img/meetingPics/sweInterviewPrep.jpg'
import revEng from '../../img/meetingPics/revEng.jpg'
import dayInTheLife from '../../img/meetingPics/dayInTheLife.jpg'
import womenInTech from '../../img/meetingPics/womenInTech.jpg'
import gameDev from '../../img/meetingPics/gameDev.jpg'
import dataAnalytics from '../../img/meetingPics/dataAnalytics.jpg'
import kickoff from '../../img/meetingPics/kickoff.JPG'
import computerVision from '../../img/meetingPics/computerVision.jpg'
import metasploitable from '../../img/meetingPics/metasploitable.jpg'
import spring2021Kickoff from '../../img/meetingPics/spring2021Kickoff.jpg'
import javaProjects from '../../img/meetingPics/javaProjects.jpg'
import RAT_ from '../../img/meetingPics/RAT.jpg'
import chatBot from '../../img/meetingPics/chatbot.jpg'
import passwordCracking from '../../img/meetingPics/passwordCracking.jpg'
import htmlCss from '../../img/meetingPics/htmlCss.jpg'
import webscraping from '../../img/meetingPics/webscraping.jpg'
import phishing from '../../img/meetingPics/phishing.jpg'
import internshipAdvice from '../../img/meetingPics/internshipAdvice.jpg'
import pygame from '../../img/meetingPics/pygame.jpg'
import fall2020Kickoff from '../../img/meetingPics/fall2020Kickoff.jpg'

import SWEInterviewPrep from './MeetingFiles/SJU_ACM_Software_Engineering_Interview_Prep.pdf'
import RevEng from './MeetingFiles/SJU_ACM_Reverse_Engineering_Lab.pdf'
import Women_and_NB from './MeetingFiles/SJU_ACM_Women_&_Non-Binary_in_Tech.pdf'
import Fall2021KickoffSlides from './MeetingFiles/SJU_ACM_Fall_2021_Kickoff.pdf'

export const meetings = [
    {
        date: '11/18/2021',
        name : 'Software Engineering Interview Prep',
        description : 'Learn about the software engineering interview process for big tech companies like Google & Microsoft and how to best prepare for them. We go over how to approach common interview problems and the best resources to prepare for them.',
        slidesLink: SWEInterviewPrep,
        slidesName: 'SJU_ACM_Software_Engineering_Interview_Prep.pdf',
        codeLink: 'https://colab.research.google.com/github/SJUACM/Technical-Interview-Prep/blob/main/SJU_ACM_Software_Engineering_Interview_Prep_.ipynb',
        youtubeLink: '',
        img : sweInterviewPrep,
        margin_top : '0px',
        alt_margin : true,
        semester : 'Fall 2021',
    },
    {
        date: '11/4/2021',
        name : 'Intro to Reverse Engineering',
        description : 'Dive into computer memory to uncover the password needed to access a file, taking a look at registers, working with Ghidra, and doing buffer overflows!',
        slidesLink: RevEng,
        slidesName: 'SJU_ACM_Reverse_Engineering_Lab.pdf',
        codeLink: '',
        youtubeLink: '',
        img : revEng,
        alt_ : true,
        semester : 'Fall 2021',
    },
    {
        date: '10/28/2021',
        name : 'Day in the Life of an SJU Alumni in Tech',
        description : 'Come find out what our SJU technology majors are up to now, with alumni speakers from IBM, NYC Cyber Command and more! Special thanks to Anthony Boceki, Joseph DiRe, Anna Yeomans, and Sayef Iqbal for taking the time to speak with us!',
        slidesLink: '',
        codeLink: '',
        youtubeLink: '',
        img : dayInTheLife,
        semester : 'Fall 2021',
    },
    {
        date: '10/18/2021',
        name : 'Women & Non-Binary in Tech',
        description : "It's no secret that the tech industry isn't the most gender-inclusive, so we'd like to do do our part to help build a community for our underrepresented students on campus. Meet fellow women & non-binary students in tech and get some insight into organizations & resources to look into!",
        slidesLink: Women_and_NB,
        slidesName: 'SJU_ACM_Women_&_Non-Binary_in_Tech.pdf',
        codeLink: '',
        youtubeLink: '',
        img : womenInTech,
        semester : 'Fall 2021',
    },
    {
        date: '10/7/2021',
        name : 'Intro to Game Development',
        description : "Pick up some valuable knowledge on the ins and outs of game development, with our e-board member Tom presenting how he created and published his game with Unity.",
        slidesLink: '',
        codeLink: '',
        youtubeLink: '',
        img : gameDev,
        customMessage : 'Download the Game',
        customLink : 'https://tektonik-software.itch.io/sky-cycle',
        semester : 'Fall 2021',
    },
    {
        date: '9/30/2021',
        name : 'Data Analytics with Python',
        description : "Learn how to use Python to effectively analyze worldwide COVID-19 data and create interactive visualizations with just a few lines of code! ",
        slidesLink: '',
        codeLink: 'https://colab.research.google.com/github/SJUACM/COVID-19-Data-Analysis/blob/main/COVID_19_Data_Analysis_Lab.ipynb',
        youtubeLink: '',
        img : dataAnalytics,
        semester : 'Fall 2021'
    },
    {
        date: '9/23/2021',
        name : 'Fall 2021 Kickoff | DoS Attack',
        description : "Learn about who we are as SJU ACM, what it means to be a member, get to know our e-board members, and get some general tips for moving forward! ",
        slidesLink: Fall2021KickoffSlides,
        slidesName: 'SJU_ACM_Fall_2021_Kickoff.pdf',
        codeLink: '',
        youtubeLink: '',
        img : kickoff,
        margin_left: '-100px',
        semester : 'Fall 2021',
    },
    {
        date: '3/25/2021',
        name : 'Computer Vision & Applications', 
        description : "This meeting provides a high-level overview of Computer Vision, which is one of the most exciting frontiers in Artificial Intelligence. By mimicking the functions of the human brain, scientists have allowed computers to 'see', and this has opened up a world of possibilities in autonomous driving, healthcare, and even space exploration.",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=ugCHGbzswGE',
        img : computerVision,
        start_sem : true,
        semester : 'Spring 2021',
    },
    {
        date: '3/04/2021',
        name : 'Getting Started with Metasploitable', 
        description : "In this meeting, you'll be introduced to a cornerstone of pen-testing: Metasploit. Discover vulnerabilities and execute exploit code through the use of scripts we have ready for you. Unleash your inner script kiddie!",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=w3MfpAT218o',
        img : metasploitable,
        semester : 'Spring 2021',
    },
    {
        date: '2/18/2021',
        name : 'Projects & Inspiration! Spring 2021 Kickoff', 
        description : "For the kick-off meeting of the Spring Semester, we as the board present some of our projects, hobbies, and activism that we've been a part of since we left off the Fall Semester. Check out the recording for some good advice and even better projects!",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=-Zt8-Zbwy0s',
        img : spring2021Kickoff,
        semester : 'Spring 2021',
    },
    {
        date: '11/12/2020',
        name : 'Java Projects for Beginners', 
        description : "This meeting provides insight on how to easily make a JSwing GUI using a Netbeans tool and hook it up to some data. After, we head into a presentation with an array of projects to inspire beginner coders! ",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=abW7AQ-Lc9E',
        img : javaProjects,
        start_sem : true,
        semester : 'Fall 2020',
    },
    {
        date: '11/5/2020',
        name : 'Setting up a RAT / Social Engineering', 
        description : "In this meeting, we go over what RATs are, how to make one, their capabilities, and how to protect against them. When our presenter, Martin, attempted to demo the RAT between two VMs, things quickly took a turn and Martin hit the street to show us how it's really done...",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=xDqmxO7v67U',
        img : RAT_,
        semester : 'Fall 2020',
    },
    {
        date: '10/22/2020',
        name : 'Creating a ChatBot with Python', 
        description : "In this meeting, our VP, Faizan, shows us how to create a ChatBot that can answer questions by pulling data from Wolfram Alpha and Wikipedia using their APIs as well as using Twilio to send SMS messages programmatically. Bonus presentation at the end by board member DeJonte July on the key features of Git!",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=hgEiYBjft8A',
        img : chatBot,
        semester : 'Fall 2020',
    },
    {
        date: '10/15/2020',
        name : 'Password Cracking & Steganography', 
        description : "This meeting provides a demonstration of a password cracking software called John the Ripper, along with bonus lab on how to hide information in images using various steganography techniques!",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=Us8T9r-rIFI',
        img : passwordCracking,
        semester : 'Fall 2020',
    },
    {
        date: '10/1/2020',
        name : 'Semester Project | Intro to HTML & CSS', 
        description : "In this meeting, we go over the basics to HTML and CSS; starting with the fundamentals of structuring a web page and finishing with designing a navigation bar. Towards the end, a presentation on the importance of HTML in Cyber Security is given. ",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=c77nc8Iod4o',
        img : htmlCss,
        semester : 'Fall 2020',
    },
    {
        date: '9/24/2020',
        name : 'Webscraping in Python for Internship Listings', 
        description : "In this meeting, we go over what webscraping is and how it can be used to automate boring and tedious tasks. Our VP Faizan shows us how to use python to scrape data from Indeed.com to automatically pull data from hundreds of internship job listings into an Excel file.",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=zz3YTqDcDO0',
        img : webscraping,
        semester : 'Fall 2020',
    },
    {
        date: '9/17/2020',
        name : 'Going Phishing | Phishing Attack Demo', 
        description : "In this meeting, our Co-President Isaac leads a workshop in showing what a phishing attack is and how it is done. The demonstration was done using Facebook to highlight the danger of such an attack; the attack was shown from Linux and Windows operating systems, side by side.",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=8EBEDDgp2e8',
        img : phishing,
        semester : 'Fall 2020',
    },
    {
        date: '9/10/2020',
        name : 'How to Market Yourself | Internship Advice', 
        description : "In this presentation, members from our board gave their advice and shared experiences on how to market yourself in the competitive tech landscape and tips for how to landing an internship in tech!",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=DWtHq1m-a1k',
        img : internshipAdvice,
        semester : 'Fall 2020',
    },
    {
        date: '9/10/2020',
        name : 'Introduction to Python & PyGame', 
        description : "In this meeting, our Co-President Vince leads a workshop on a brief introduction to Python and how to use PyGame to create interactive, moving images.",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=BhQXfHv4nKw',
        img : pygame,
        semester : 'Fall 2020',
    },
    {
        date: '9/3/2020',
        name : 'Semester Kickoff | DNS Sinkhole', 
        description : "In this meeting, our board members introduce themselves, go over plans for the semester, and host a special presentation on a DNS sinkhole!",
        slidesLink: '',
        codeLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=8bECiNq460Y',
        img : fall2020Kickoff,
        semester : 'Fall 2020',
    }

];





