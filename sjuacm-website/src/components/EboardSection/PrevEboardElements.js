import styled from "styled-components";

import {Card} from 'react-bootstrap'

export const CardContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 3200px;
    position: relative;
    z-index: 1;
    margin-bottom: 100px;
    flexWrap: wrap;
    margin-top: -180px;
    padding-top: 600px;

    @media screen and (max-width: 1060px) {
        height: 2000px;
        align-items: center;
    }

    @media screen and (max-width: 860px) {
        padding-top: 1150px;
        padding-bottom: 950px;
        text-align: center;
    }

    // @media screen and (max-width: 855px) {
    //     padding-top: 2600px;
    //     padding-bottom: 950px;
    // }

    @media screen and (max-width: 760px) {
        height: 4600px;
        margin-top: -400px;
        padding-top: 1600px;
        align-items: center;
    }

    @media screen and (max-width: 480px) {
        padding-top: 1500px
        padding-bottom: 1800px;
        height: 5500px;
    }

`;

export const CustomCard = styled(Card)`
    z-index: 1;
    max-width: 400px;
    border: '1px solid black';

    @media screen and (max-width: 1060px) {
        max-width: 350px;
    }

`;

export const CardWrapper = styled.div`
    display: flex;
    flexWrap: wrap;
`;


export const CustomCardImg = styled.img`
    max-width: 350px;
    width: 100%;
    max-height: 300px;
`;

export const CustomCardBody = styled.p`
    color: white;
`;

export const CustomCardTitle = styled.h1`
    margin-top: 15px;
    line-height: 1.3;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        font-size: 1.5em;
    }
`;


export const PrevEboardTitle = styled.h1`
    margin-top: 15px;
    line-height: 1.3;
    color: white;

    @media screen and (max-width: 860px) {
        padding-top: 200px;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.5em;
    }
`;


export const CustomCardTitle2 = styled.h2`
    margin-top: 15px;
    line-height: 1.3;
    color: white;
    font-size: 19px;

    @media screen and (max-width: 400px) {
        font-size: 18px;
    }
`;


export const CustomCardText = styled.p`
    margin-top: 15px;
    color: white;
    letter-spacing: 0.8px;
`;


export const IconContainer = styled.div`
    
    margin-top: 15px;
    
    @media screen and (max-width: 480px) {
        font-size: 15px;
        display: flex;
        justify-content: center;
    }
`;

export const EmailText = styled.span`
    
    font-size: 13.5px;

    @media screen and (max-width: 1060px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        text-align: center;
        margin-top: 0px;
    }
`;


export const InfoWrapper = styled.div`

    max-width: 800px;

    @media screen and (max-width: 768px) {
        margin-top: -100px;
    }

    @media screen and (max-width: 860px) {
        align-items: center;
        justify-content: center;
    }
`;