import { faGithub, faInstagram, faDiscord, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';


const SocialMediaWrapper = styled.div`
    
    @media screen and (max-width: 355px) {
        width: 100%;
       
    }
`;


function SocialMedia(props) {
    const iconType = props.type ? props.type : '';

	return (
        <SocialMediaWrapper>
            <span className={'social-media-icon-container ' + iconType}>
                <a className="icon-link" href="https://www.instagram.com/sjuacm" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM Instagram">
                    <FontAwesomeIcon icon={faInstagram} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem'}} />
                </a>
                <a className="icon-link" href="https://discord.gg/fjMSxbER4F" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM Discord">
                    <FontAwesomeIcon icon={faDiscord} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem', marginLeft: '20px'}}/>
                </a>
                <a className="icon-link" href="https://www.youtube.com/channel/UCuIcwbZDPnZYNQ0pFhmaNwQ/videos" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM YouTube">
                    <FontAwesomeIcon icon={faYoutube} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem', marginLeft: '20px'}}/>
                </a>
                <a className="icon-link" href="https://www.github.com/sjuacm" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM GitHub">
                    <FontAwesomeIcon icon={faGithub} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem', marginLeft : '20px'}} />
                </a>
                <a className="icon-link" href="https://www.linkedin.com/company/sjuacm/" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem', marginLeft : '20px'}} />
                </a>
            </span>
        </SocialMediaWrapper>
	);
}

export default SocialMedia;