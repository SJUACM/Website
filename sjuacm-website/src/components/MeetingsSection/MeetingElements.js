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

    @media screen and (max-width: 768px) {
        padding-bottom : 150px;
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

    padding-top : ${({ alt_ }) => (alt_ ? "50px" : "")};
    padding-bottom : ${({ alt_ }) => (alt_ ? "100px" : "")};
    padding-top : ${({ alt_margin }) => (alt_margin ? "-250px" : "")};
    height : ${({ alt_margin }) => (alt_margin ? "700px" : "600px")};
    height : ${({ alt_ }) => (alt_ ? "650px" : "")};


    @media screen and (max-width: 768px) {
        height: 1200px;
        padding-top: 150px;
        
    }

    @media screen and (max-width: 400px) {
        height: 900px;
        margin-top : ${({ alt_margin }) => (alt_margin ? "250px" : "-450px")};
        padding-top : ${({ alt_margin }) => (alt_margin ? "400px" : "-450px")};
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
    margin-top: -800px;

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
    margin-left : ${({ margin_left }) => (margin_left ? "-100px" : "0px")};
    margin-top: 50px;


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