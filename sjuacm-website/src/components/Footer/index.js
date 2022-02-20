import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, CopyRightText } from './FooterElements'
import { faGithub, faInstagram, faDiscord, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css'

const Footer = ({margin_top, margin_bottom, padding_bottom, res_adjust}) => {
    
    // const iconType = props.type ? props.type : '';
    
    return (
        <FooterContainer res_adjust={res_adjust} style={{marginTop: margin_top,  marginBottom: margin_bottom, paddingBottom: padding_bottom}}>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            
                            <span className={'social-media-icon-container'}>
                                <a className="icon-link" href="https://www.instagram.com/sjuacm" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM Instagram">
                                    <FontAwesomeIcon icon={faInstagram} fixedWidth aria-hidden={true} style={{fontSize : '2.0rem'}} />
                                </a>
                               
                                <a className="icon-link" href="https://discord.gg/8m7C9PgBQE" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM Discord">
                                    <FontAwesomeIcon icon={faDiscord} fixedWidth aria-hidden={true} style={{fontSize : '2.0rem', marginLeft: '20px'}}/>
                                </a>
                               
                                <a className="icon-link" href="https://www.youtube.com/channel/UCuIcwbZDPnZYNQ0pFhmaNwQ/videos" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM YouTube">
                                    <FontAwesomeIcon icon={faYoutube} fixedWidth aria-hidden={true} style={{fontSize : '2.0rem', marginLeft: '20px'}}/>
                                </a>
                            
                              
                                <a className="icon-link" href="https://www.github.com/sjuacm" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM GitHub">
                                    <FontAwesomeIcon icon={faGithub} fixedWidth aria-hidden={true} style={{fontSize : '2.0rem', marginLeft : '20px'}} />
                                </a> 
                                
                                <CopyRightText>© St. John's University ACM Student Chapter 2022.</CopyRightText>
                               
                            </span>

                        </FooterLinkItems>
                            
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
