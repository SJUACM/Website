import styled from "styled-components";

import {Card, Button} from 'react-bootstrap'


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
    margin-top: 80px;
    padding-top: 75px;
    padding-bottom: 200px;

`;

export const CustomCardText2 = styled.p`
    margin-top: 10px;
    color: white;
    letter-spacing: 0.8px;
    font-size: 19px;
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

    @media screen and (max-width: 450px) {
        height: 1450px;
    }
`;

export const BlogContainer2 = styled.div`
    background: #0c0c0c;
    height: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
    margin-top: -200px;
    padding-bottom: 275px;

    @media screen and (max-width: 450px) {
        height: 1450px;
    }
`;

export const BlogTextContainer = styled.div`
    margin-left: 25%;
    margin-right: 25%;
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
`;



export const BlogTitle = styled.p`
    margin-top: 75px;
    color: white;
   
    font-size: 38px;
    line-height: 24px;
    letter-spacing: 1.2px;
    line-height: 28px;
    text-align: center;

    @media screen and (max-width: 768px) {
        margin-top: 150px;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.0rem;
    }
`;
    
export const BlogAuthor = styled.p`
    margin-top: 35px;
    color: white;
    text-align: center;
    margin-bottom: 35px;
    font-size: 23px;
    line-height: 24px;
    letter-spacing: 0.9px;
    line-height: 28px;

    @media screen and (max-width: 400px) {
        font-size: 1.0rem;
    }
`;

export const BlogText = styled.p`
    color: white;
    margin-top: 0px;
    font-size: 20px;
    letter-spacing: 0.9px;
    text-align: center;


    // @media screen and (max-width: 400px) {
    //     font-size: 1.0rem;
    // }
`;



export const BlogText2 = styled.p`
    color: white;
    margin-top: 55px;
    font-size: 20px;
    letter-spacing: 0.9px;
    text-align: center;
    line-height: 35px;


    // @media screen and (max-width: 400px) {
    //     font-size: 1.0rem;
    // }
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

`;

export const ImgWrap2 = styled.div`
    margin-top: 400px;
    max-width: 375px;
    height: 100%;

`; 


export const BlogImg = styled.img`
    width: 100%;
    transform: scale(1.2);
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-top: -275px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;


export const BlogImg2 = styled.img`
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