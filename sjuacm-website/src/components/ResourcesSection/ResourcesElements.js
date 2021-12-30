import styled from "styled-components";

import {Card, Button} from 'react-bootstrap'

export const CardContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 3000px;
    position: relative;
    z-index: 1;
    margin-bottom: 100px;
    flexWrap: wrap;
    margin-top: -950px;
    //padding-top: -500px;

    @media screen and (max-width: 1080px) {
        height: 6000px;
        padding-top: -250px;
        margin-top: -2400px;
    }

    @media screen and (max-width: 770px) {
        
        padding-top: 3000px;
       
    }

    @media screen and (max-width: 400px) {
        margin-top: -2800px;
        height: 6800px;
    }
`;

export const CustomCard = styled(Card)`
    z-index: 1;
    max-width: 500px;
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

    @media screen and (max-width: 400px) {
        font-size: 1.5em;
    }
`;

export const CustomCardText = styled.p`
    margin-top: 15px;
    color: white;
    letter-spacing: 0.8px;
`;

export const CustomButton = styled(Button)`
 
`;

export const InfoWrapper = styled.div`
    // display: grid;
    // z-index: 1;
    height: 860px;
    // width: 100%;
    max-width: 1000px;
    // margin-right: auto;
    // margin-left: auto;
    // padding: 0 24px;
    // justify-content: center;
    // margin-top: -800px;

    @media screen and (max-width: 768px) {
        height: 4000px;
        padding-bottom: -2000px;
    }
`;