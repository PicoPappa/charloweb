import React from "react"
import styled from "styled-components"
import { ButtonHolderMobile } from "../Button/ButtonElements"
import ModalButtonMobile from "../Button/ButtonMobile"
import "./HeroSection.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { TiTick } from "react-icons/ti"

import "../Journey/journeyStyle.css"
import {FluidContainer } from "../Features/FeatureElements"
import backgroundVideo from "../../videos/video.webm"
import ModalButtonMobileBr from "../Button/ButtonMobileBr"

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
            <source src={backgroundVideo} type="video/webm"/>
        </video>
        </div>
      <div className="hero-container">
        {/* <Circle>
          <CircleFluidContainer>
            <Img fluid={ data.file.childImageSharp.fluid } alt="" />
          </CircleFluidContainer>
        </Circle> */}
        <FluidContainer>
                 <Img fluid={ data.file.childImageSharp.fluid } alt="logo" />
               </FluidContainer>
                        <h1><b>Aprenda Espanhol<br/>Online</b>
                        </h1>


                    <ul>
                        <li><TickIcon/>Amigável para iniciantes.</li>
                        <li><TickIcon/>Aprenda com professores nativos de Argentina</li>
                        <li><TickIcon/>Melhores preços e qualidade na indústria</li>
                    </ul>
                    <ButtonHolderMobile>
                       <ModalButtonMobileBr>

                       </ModalButtonMobileBr>
                        <p> Não precisa de cartão de crédito.</p>
                    </ButtonHolderMobile>
               </div>
            
            <div>
              <tinyequis />
               
         
             </div>

          </div>  
      
    
    )
}
