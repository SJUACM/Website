import styled from "styled-components";

export const AboutPageContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    padding: 0 30px;
    height: 1300px;
    position: relative;
    z-index: 1;
    margin-bottom: -300px;
    padding-top: 40px;
    width: 100%;

    @media screen and (max-width: 450px) {
        height: 1450px;
    }
`;


export const AboutPageContainer2 = styled.div`
    background: #0c0c0c;
    display: flex;
    padding: 0 30px;
    height: 1100px;
    position: relative;
    z-index: 1;
    margin-top: -600px;
    margin-bottom: -300px;
    padding-top: 20px;
    width: 100%;

    @media screen and (max-width: 768px) {
        height: 1550px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 440px) {
        padding-bottom: 100px;
    }
`;

export const TextWrapper2 = styled.div`
    
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        margin-top: -250px;
    }
`;


export const AboutPageContent = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const AboutPageHeader = styled.p`
    margin-top: 0px;
    color: white;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.9px;
    line-height: 28px;

    @media screen and (max-width: 768px) {
        margin-top: 150px;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.0rem;
    }
`;
    
export const AboutPageText = styled.p`
    margin-top: 50px;
    color: white;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.9px;
    line-height: 28px;

    @media screen and (max-width: 400px) {
        font-size: 1.0rem;
    }
`;


export const AboutPageText2 = styled.p`
    color: white;
    margin-top: 70px;
    font-size: 18px;
    letter-spacing: 0.9px;
    text-align: center;

    @media screen and (max-width: 400px) {
        font-size: 1.0rem;
    }
`;


export const AboutPageText3 = styled.p`
    color: white;
    margin-top: 20px;
    font-size: 18px;
    letter-spacing: 0.9px;
    text-align: center;

    
    @media screen and (max-width: 400px) {
        font-size: 1.0rem;
    }
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    padding-bottom: 30px;
`;

export const Column2 = styled.div`
    margin-top: 200px;
    padding: 0 15px;
    grid-area: col2;

`;


export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

`;

export const ImgWrap2 = styled.div`
    margin-top: 400px;
    max-width: 375px;
    height: 100%;

`; 


export const AboutPageImg = styled.img`
    width: 100%;
    transform: scale(1.2);
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-top: -275px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;


export const AboutPageImg2 = styled.img`
    width: 100%;
    transform: scale(1.2);
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-top: -275px;

    @media screen and (max-width: 950px) {
        padding: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
        margin-top: -300px;
        padding-top: -100px;
        align-self: center;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 450px) {
        margin-top: -325px;
        padding-top: -200px;
        align-self: center;
        display: flex;
        justify-content: center;
    }
`;