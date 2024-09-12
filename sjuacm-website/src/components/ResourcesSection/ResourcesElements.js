import styled from "styled-components";

import {Card} from 'react-bootstrap'

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

    @media screen and (max-width: 1080px) {
        // height: 6000px;
        // padding-top: -250px;
        // margin-top: -2400px;
    }

    @media screen and (max-width: 860px) {
        
        // margin-top: -3150px;
        // padding-top: 200px;
        // padding-bottom: 300px;
        // height: 7500px;
       
    }

    @media screen and (max-width: 770px) {
        // padding-top: 3350px;
    }

    @media screen and (max-width: 450px) {
        // padding-bottom: 400px;
        
    }
`;

export const CustomCard = styled(Card)`
    z-index: 1;
    max-width: 400px;
    border: '1px solid black';
`;

export const CustomCardImg = styled.img`
    width: 100%;
    max-width: 400px;
`;

export const CustomCardBody = styled.p`
    color: white;
`;

export const CustomCardTitle = styled.h1`
    margin-top: 15px;
    line-height: 1.3;
    color: white;
    font-size: 1.8em;

    @media screen and (max-width: 400px) {
        font-size: 1.5em;
    }
`;

export const CustomCardText = styled.p`
    margin-top: 15px;
    color: white;
    letter-spacing: 0.8px;
    font-size: 15px;
`;


export const InfoWrapper = styled.div`

    height: 100%;
    max-width: 800px;

    @media screen and (max-width: 768px) {
        // height: 4000px;
        // padding-bottom: -2000px;
    }
`;