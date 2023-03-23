import styled from "styled-components";

export const CardContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100%;
    position: relative;
    z-index: 1;
    margin-bottom: 100px;
    flexWrap: wrap;
    margin-top: 20px;
    padding-top: 130px;
    padding-bottom: 75px;

    @media screen and (max-width: 420px) {
        margin-top: -20px;
        padding-top: 140px;
    }

`;

export const CustomCardText2 = styled.p`
    margin-top: 10px;
    color: white;
    letter-spacing: 0.8px;
    font-size: 19px;

    
    @media screen and (max-width: 420px) {
        font-size: 18.5px;
    }
`;


export const CustomCardTitle = styled.h1`
    margin-top: 15px;
    line-height: 1.3;
    color: white;
    font-size: 1.8em;

    @media screen and (max-width: 420px) {
        font-size: 25px;
    }
`;

export const CustomCardText = styled.p`
    margin-top: 15px;
    color: white;
    letter-spacing: 0.8px;
    font-size: 15px;
`;




// ----------------------------------------------------------

export const BlogContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    padding: 0 30px;
    height: 100%;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding-bottom: 275px;
    
`;

export const BlogContainer2 = styled.div`
    background: #0c0c0c;
    height: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
    margin-top: -210px;
    padding-bottom: 275px;

`;

export const BlogTextContainer = styled.div`
    margin-left: 27%;
    margin-right: 27%;

    @media screen and (max-width: 1200px) {
        margin-left: 19%;
        margin-right: 19%;
    }

    @media screen and (max-width: 420px) {
        margin-left: 12%;
        margin-right: 12%;
    }
`;

export const BlogContent = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    margin-top: 500px;
    // max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 450px) {
        margin-top: 350px;
    }
`;



export const BlogTitle = styled.p`
    margin-top: 75px;
    color: white;
    font-size: 38px;
    letter-spacing: 1.2px;
    line-height: 28px;
    text-align: center;

    @media screen and (max-width: 805px) {
        line-height: 40px;
        font-size: 35px;
    }

    @media screen and (max-width: 420px) {
        font-size: 28px;
    }

    @media screen and (max-width: 400px) {
        font-size: 27px;
    }
`;
    
export const BlogAuthor = styled.p`
    margin-top: 35px;
    color: white;
    text-align: center;
    margin-bottom: 35px;
    font-size: 23.5px;
    line-height: 24px;
    letter-spacing: 0.9px;
    line-height: 28px;

    @media screen and (max-width: 420px) {
        font-size: 24px; 
        margin-top: 20px;  
    }

    @media screen and (max-width: 400px) {
        font-size: 24px;
    }
`;

export const BlogDate = styled.p`
    margin-top: -10px;
    color: white;
    text-align: center;
    margin-bottom: 35px;
    font-size: 19px;
    letter-spacing: 0.9px;
    line-height: 28px;

    @media screen and (max-width: 420px) {
        font-size: 20px;   
    }
`;




export const BlogText = styled.p`
    color: white;
    margin-top: -20px;
    font-size: 19.2px;
    letter-spacing: 0.9px;
    text-align: center;
    line-height: 35px;


    @media screen and (max-width: 420px) {
        font-size: 15px;
        line-height: 30px;
        margin-top: -50px;
        text-align: left;
    }
`;


export const BlogText2 = styled.p`
    color: white;
    margin-top: 55px;
    font-size: 19.2px;
    letter-spacing: 0.9px;
    text-align: center;
    line-height: 35px;

    @media screen and (max-width: 420px) {
        font-size: 15px;
        line-height: 30px;
        text-align: left;

    }
`;


export const BlogText3 = styled.p`
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
    text-align: center;
    margin-left: auto;
    margin-right: auto;

`;

export const ImgWrap2 = styled.div`
    margin-top: 400px;
    max-width: 375px;
    height: 100%;

`; 


export const BlogImg = styled.img`
    width: 100%;
    transform: scale(1.2);
    
    margin-top: -275px;
    text-align: center;

    
`;


export const BlogImg2 = styled.img`
    width: 100%;
    transform: scale(0.8);
    margin-bottom: -30px;

    @media screen and (max-width: 500px) {
        margin-top: 30px;
        transform: scale(0.9);
    }

`;