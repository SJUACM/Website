import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const FooterContainer = styled.footer`
    background-color: black;
    z-index: 1;
    height: 200px;
    margin-bottom: 300px;
    padding-bottom: 30px;

    @media screen and (max-width: 400px) {
        height: 300px;
        padding-top: -50px;
        margin-bottom: -350px;
    }

    @media screen and (max-width: 1060px) {
        // margin-bottom: ${({ res_adjust }) => (res_adjust ? "0px" : "")};
    }

    
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }

`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
    
    @media screen and (max-width: 400px) {
        padding: 2rem;
    }
    
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    color: #fff;
    z-index: 1;
    
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
    }

`;

export const FooterLinkTitle = styled.div`
    font-size: 14px;
    margin-bottom: 16px;
    
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: red;
        transition: 0.3s ease-out;
    }
`;

