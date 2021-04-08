import React from "react"
import styled from "styled-components"
import { Button, ButtonHolder, ButtonMobile, ButtonHolderMobile } from "../Button/ButtonElements"
import ModalButtonMobile from "../Button/ButtonMobile"
import "./HeroSection.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { TiTick } from "react-icons/ti"
import { GrFormClose } from "react-icons/gr"
import "../Journey/journeyStyle.css"
import { Circle, CircleFluidContainer, FluidContainer } from "../Features/FeatureElements"
import backgroundVideo from "../../videos/video.mp4"

const TickIcon = styled( TiTick )`
font-size:20px;
margin-right:10px;
justify-content:center;
align-items:center;
margin-bottom:-5px;
color:#56cafc;
`

const tinyequis = styled( TiTick )`
font-size:20px;
margin-right:10px;
justify-content:center;
align-items:center;
margin-bottom:-5px;
color:#56cafc;
`



export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo3.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid  {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      
    <div className="hero-wrapper">
      <div className="videocontainer">
      <video autoPlay loop muted id="video">
            <source src={backgroundVideo} type="video/mp4"/>
        </video>
        </div>
      <div className="hero-container">
        {/* <Circle>
          <CircleFluidContainer>
            <Img fluid={ data.file.childImageSharp.fluid } alt="" />
          </CircleFluidContainer>
        </Circle> */}
        <FluidContainer>
               <Img fluid={ data.file.childImageSharp.fluid } alt="" />
               </FluidContainer>
                      <h3>Learn today's</h3>
                      <h2>spanish with us</h2>

                    <ul>
                        <li><TickIcon/>100% personalized live classes.</li>
                        <li><TickIcon/>Learn with native teachers.</li>
                        <li><TickIcon/>#1 prices and quality in the industry.</li>
                    </ul>
                    <ButtonHolderMobile>
                       <ModalButtonMobile>

                       </ModalButtonMobile>
                        <p>No credit card needed.</p>
                    </ButtonHolderMobile>
               </div>
            
            <div>
              <tinyequis />
               
         
             </div>

          </div>  
      
    
    )
}
