import aboutSection from '../../img/aboutSection.png'
import eboardSection from '../../img/eboardSection.png'

export const homeObjOne = {
    id: 'meetings',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'SJU ACM',
    headline: 'Expanding knowledge beyond the classroom',
    description: 'We provide the necessary materials to help you succeed in a future career in tech! Gain hands-on experience through our interactive labs and workshops',
    buttonLabel: 'View our Past Meetings',
    imgStart: false,
    img: aboutSection,
    alt: 'About',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'eboard',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Leadership',
    headline: 'Meet our E-Board',
    description: 'Our Executive Board consists of students with exceptional technical talent. From machine learning to penetration testing, our e-board is skilled in numerous areas in Computer Science and Cyber Security',
    buttonLabel: 'View our E-Board Members',
    imgStart: true,
    img: eboardSection,
    alt: 'E-Board',
    dark: true,
    primary: true,
    darkText: false,
    margin_top: '-200px',
};