import {
    faGithub,
    faInstagram,
    faDiscord,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SocialMediaContainer } from './AboutSection/AboutElements';

function SocialMedia(props){
    const iconType = props.type ? props.type : '';

	return (
        <SocialMediaContainer>
            <span className={'social-media-icon-container ' + iconType}>
                <a className="icon-link" href="https://www.instagram.com/sjuacm" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM Instagram">
                    <FontAwesomeIcon icon={faInstagram} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem'}} />
                </a>
                <a className="icon-link" href="https://discord.gg/8m7C9PgBQE" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM Discord">
                    <FontAwesomeIcon icon={faDiscord} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem', marginLeft: '20px'}}/>
                </a>
                <a className="icon-link" href="https://www.youtube.com/channel/UCuIcwbZDPnZYNQ0pFhmaNwQ" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM YouTube">
                    <FontAwesomeIcon icon={faYoutube} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem', marginLeft: '20px'}}/>
                </a>
                <a className="icon-link" href="https://www.github.com/sjuacm" target="_blank" rel="noreferrer noopener" aria-label="SJU ACM GitHub">
                    <FontAwesomeIcon icon={faGithub} fixedWidth aria-hidden={true} style={{color : 'white', fontSize : '2.0rem', marginLeft : '20px'}} />
                </a>
            </span>
        </SocialMediaContainer>
	);
}

export default SocialMedia;