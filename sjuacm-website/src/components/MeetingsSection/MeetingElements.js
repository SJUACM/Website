import styled from "styled-components";

export const DropdownSection = styled.div`
    background : #0c0c0c;
    padding-bottom: 350px;
    margin: auto;
    display: flex;
    justify-content : center
    
`;

export const DropdownContainer = styled.div`
    max-width: 175px;
    width: 175px;
    padding-bottom : 150px;
    padding-top: 150px;

    @media (max-width: 768px) {
        padding-bottom: 10px;
    }

`;

export const MeetingContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
    position: relative;
    z-index: 1;
    margin-bottom: -300px;

   
    @media screen and (max-width: 768px) {
        height: 1000px;
        padding-top: 850px;
        padding-bottom: 350px;
        
    }

    @media screen and (max-width: 500px) and (min-width: 470px) {
        padding-top: 900px;
    }

    @media screen and (max-width: 400px) {
        padding-bottom: -360px;
        margin-bottom: -360px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    margin-top: 0px;

    @media screen and (max-width: 768px) {
        margin-top: -750px;
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

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    margin-left : ${({ margin_left }) => (margin_left ? "-100px" : "-2.5px")};
    margin-top: 50px;

    @media screen and (max-width: 1095px) {
        margin-left : ${({ margin_left }) => (margin_left ? "0px" : "0px")};
    }

    @media screen and (max-width: 768px) {
        margin-top: 125px;
    }

    @media screen and (max-width:  650px) {
        margin: auto;
        margin-left : ${({ margin_left }) => (margin_left ? "0px" : "0px")};
        align-items: center;
        justify-content: center;
        margin-bottom: -20px;

    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        margin-top: -150px;
    }
`;


export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 500px) and (min-width: 470px) {
        padding-bottom: 70px;
    }
`;

export const LinkWrapper = styled.div`
    margin-bottom: 80px;
    
    
`;

export const TopLine = styled.p`
    color: red;
    font-size: 23px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 850px) {
        line-spacing: 2.4px;
        line-height: 28px;
    }
`;


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0.9px;
    color: white;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Heading2 = styled.h1`
    margin-bottom: 50px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0.9px;
    color: white;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    margin-top: 20px;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.9px;
    color: white;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 100%;

    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }

    @media screen and (max-width: 400px) {
        margin-top: 40px;
    }

`; 

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const CarouselContainer = styled.div`
    max-width: 400px;
    height: 100%;
    width: 100%;
    margin: 0 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 100px;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        margin-top: 40px;
    }
    }
`;

export const PastMeetingsTitle = styled.p`
    color: #fff;
    padding-top: 100px;
    font-size: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    letter-spacing: 1px;

    @media screen and (max-width: 480px) {
        font-size: 33px;
    }
`;

export const TitleContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    flexWrap: wrap;
`;