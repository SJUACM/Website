import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1600px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    @media screen and (max-width: 768px) {
        padding-top: 600px;
        height: 1200px;
    }
    @media screen and (max-width: 480px) {
        padding-top: 600px;
        height: 1200px;
    }
`;

export const CarouselContainer = styled.div`
    margin-top: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

    @media screen and (max-width: 480px) {
        margin-top: 20px;
        padding-bottom: 100px;
    }
`;

export const HeroContent = styled.div`
    margin-top: -800px;
    z-index: 3;
    max-width: 1200px;
    min-width: 360px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    // @media (pointer:none), (pointer:coarse) {
    //     margin-top: -400px;
    // }

    @media not all and (min-resolution:.001dpcm) {
        margin-top: -400px;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    letter-spacing: 0.8px;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    letter-spacing: 1px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0.7px;
`;

export const HeroBtnContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 0.7px;
    @media screen and (max-width: 768px) {
        padding-bottom: 200px;
    }
`;


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;    

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;