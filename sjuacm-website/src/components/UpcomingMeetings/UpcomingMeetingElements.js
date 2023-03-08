import styled from "styled-components";


export const TitleContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding: 0 50px;
    position: relative;
    z-index: 1;
    flexWrap: wrap;
`;

export const UpcomingMeetingContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    position: relative;
    z-index: 1;
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
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;


export const TextWrapper = styled.div`
    width: 80%;
    max-width: 800px;
    padding-top: 0;
    padding-bottom: 60px;
`;


export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`; 

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const UpcomingMeetingsTitle = styled.p`
    padding-top: 150px;
    padding-bottom: 100px;
    color: #fff;
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
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0.9px;
    color: white;
`;

export const Subtitle = styled.p`
    margin-top: 20px;
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.9px;
    color: white;
`;

export const LinkWrapper = styled.div`
    margin-bottom: 80px; 
`;