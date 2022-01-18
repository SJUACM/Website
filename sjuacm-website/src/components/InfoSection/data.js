import aboutSection from '../../img/aboutSection.png'
import eboardSection from '../../img/eboardSection.png'
import resourcesSection from '../../img/resourcesSection.png'

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
    description: 'Our Executive Board consists of students who are passionate and experienced in numerous areas across Computer Science & Cyber Security. We yearn to inspire and uplift our members in order to secure a successful career in tech!',
    buttonLabel: 'View our E-Board Members',
    imgStart: true,
    img: eboardSection,
    alt: 'E-Board',
    dark: true,
    primary: true,
    darkText: false,
    margin_top: '-200px',
};

export const homeObjThree = {
    id: 'resources',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Development',
    headline: 'Check out our Resources',
    description: 'Our curated list of resources will help set you up to become a more well rounded candidate for top tech companies! Pick up the skills you need to succeed in your future career',
    buttonLabel: 'View our Resources',
    imgStart: false,
    img: resourcesSection,
    alt: 'Resources',
    dark: true,
    primary: true,
    darkText: false,
    margin_top: '-200px',
};