import React from 'react'
import { AltButton } from '../ButtonElements'
import { CardContainer, CustomCardText2 } from './BlogElements'
import {CustomCard, CustomCardImg, CustomCardBody, CustomCardTitle, CustomCardText, CustomButton, InfoWrapper} from '../ResourcesSection/ResourcesElements'
import {content} from './data'

function createCard({title, text, author, link, img, margin_top}) {
    
    return (
        <CustomCard style={{marginTop : '0px', padding : '55px'}}>
            <CustomCardImg src={img}/>
            <CustomCardBody>
                <CustomCardTitle>{title}</CustomCardTitle>
                <CustomCardText2>
                    By: {author}
                </CustomCardText2>
                <CustomCardText>
                    {text}
                </CustomCardText>
                <AltButton primary={true} dark={true} darkText={false} onClick={event =>  window.open(link, '_blank', 'noopener,noreferrer')} style={{maxWidth: '150px', maxHeight: '30px', marginTop: '25px'}}>Read</AltButton>
            </CustomCardBody>
        </CustomCard>
    )
  }

const BlogSection = () => {
    
    return (
        <>  
            <CardContainer>
               <InfoWrapper>
               <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {content.map(createCard)}
                </div>
                </InfoWrapper>
            </CardContainer>
        </>
    )
}

export default BlogSection