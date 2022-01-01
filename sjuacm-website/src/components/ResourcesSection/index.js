import React from 'react'
import { Button } from '../ButtonElements'
import {CardContainer, CustomCard, CustomCardImg, CustomCardBody, CustomCardTitle, CustomCardText, CustomButton, InfoWrapper} from './ResourcesElements'
import {content} from './data'
import {youtubeChannels} from './data'

function createCard({title, text, link, img, margin_top}) {
    
    return (
        <CustomCard style={{marginTop : '0px', padding : '55px'}}>
            <CustomCardImg src={img}/>
            <CustomCardBody>
                <CustomCardTitle>{title}</CustomCardTitle>
                <CustomCardText>
                    {text}
                </CustomCardText>
                <Button primary={true} dark={true} darkText={false} onClick={event =>  window.location.href=link} style={{maxWidth: '150px', maxHeight: '30px', marginTop: '25px'}}>Link</Button>
            </CustomCardBody>
        </CustomCard>
    )
  }

const ResourcesSection = () => {
    
    return (
        <>  
            <CardContainer>
               <InfoWrapper>
               <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {content.map(createCard)}
                </div>

                    <h1 style={{textAlign : 'center', color: 'white', marginTop: '50px'}}>YouTube Channels to Watch</h1>

                <div style={{ display: "flex", flexWrap: "wrap", paddingTop: '50px' }}>
                    {youtubeChannels.map(createCard)}
                </div>
                </InfoWrapper>
            </CardContainer>
        </>
    )
}

export default ResourcesSection