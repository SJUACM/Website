import React from 'react'
import {CardContainer, CustomCard, CustomCardImg, CustomCardBody, CustomCardTitle, CustomCardTitle2, CustomCardText, CustomButton, InfoWrapper} from './PrevEboardElements'
import {prevEboardMembers} from './data'

function addEboardMember({name, gradYear, major, img, margin_top}) {
    
    return (
        <CustomCard style={{marginTop : '0px', padding : '55px'}}>
            <CustomCardImg src={img}/>
            <CustomCardBody>
                <CustomCardTitle>{name}</CustomCardTitle>
                <CustomCardTitle2>{major}, {gradYear}</CustomCardTitle2>
                {/* <CustomCardText>
                    {text}
                </CustomCardText>
                <Button primary={true} dark={true} darkText={false} onClick={event =>  window.location.href=link} style={{maxWidth: '150px', maxHeight: '30px', marginTop: '25px'}}>Link</Button> */}
            </CustomCardBody>
        </CustomCard>
    )
  }

const PrevEboardSection = () => {
    
    return (
        <>  
            <CardContainer>
               <InfoWrapper>
                <CustomCardTitle style={{textAlign : 'center', marginTop: '-1650px', paddingBottom : '75px'}}>Previous E-Board Members</CustomCardTitle>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {prevEboardMembers.map(addEboardMember)}
                    </div>
                </InfoWrapper>
            </CardContainer>
        </>
    )
}

export default PrevEboardSection