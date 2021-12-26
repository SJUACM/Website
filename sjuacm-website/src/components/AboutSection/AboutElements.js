import styled from "styled-components";

export const AboutPageContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    padding: 0 30px;
    height: 1600px;
    position: relative;
    z-index: 1;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
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
`;

export const AboutPageHeader = styled.p`
    margin-top: 125px;
    color: white;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.9px;
    line-height: 28px;
`;
    
export const AboutPageText = styled.p`
    margin-top: -125px;
    color: white;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.9px;
    line-height: 28px;
`;

export const SocialMediaContainer = styled.div`
    margin-top: -200px;
`;

export const AboutPageImg = styled.img`
    width: auto;
    height: auto;
    max-width: 600px;
    text-align: right;
    margin-top: -350px;
`;