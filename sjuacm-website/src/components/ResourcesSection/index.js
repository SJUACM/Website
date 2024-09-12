import React from 'react'
import { AltButton } from '../ButtonElements'
import {CardContainer, CustomCard, CustomCardImg, CustomCardBody, CustomCardTitle, CustomCardText, InfoWrapper} from './ResourcesElements'
import {collections} from './data'
import {content} from './data'
import {youtubeChannels} from './data'

function createCard({title, text, link, img}) {
    
    return (
        <CustomCard style={{marginTop : '0px', padding : '55px'}}>
            <CustomCardImg src={img}/>
            <CustomCardBody>
                <CustomCardTitle>{title}</CustomCardTitle>
                <CustomCardText>
                    {text}
                </CustomCardText>
                <AltButton primary={true} dark={true} darkText={false} onClick={event =>  window.open(link, '_blank', 'noopener,noreferrer')} style={{maxWidth: '150px', maxHeight: '30px', marginTop: '25px'}}>Link</AltButton>
            </CustomCardBody>
        </CustomCard>
    )
  }

const ResourcesSection = () => {
    
    return (
        <>  
            <CardContainer>
               <InfoWrapper>

               <h1 style={{textAlign : 'center', color: 'white', marginTop: '50px'}}>Collections</h1>

               <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {collections.map(createCard)}
                </div>

               <h1 style={{textAlign : 'center', color: 'white', marginTop: '50px'}}>Helpful Websites</h1>

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