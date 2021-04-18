import React from "react"
import styled from "styled-components"
import "./styleCarousel.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { TwoColumnsWrapPricing } from "../Features/FeatureElements"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

export const LeftIcon = styled( IoIosArrowDropleftCircle )`
color:white;
opacity:0.3;
font-size:26px;
align-self:left;
justify-self:left;

`

export const RightIcon = styled( IoIosArrowDroprightCircle )`
color:white;
opacity:0.3;
font-size:26px;
align-self:right;
justify-self:right;
`

export const IconContainers = styled.div`
display:none;
 @media screen and (max-width: 690px) {
position:relative;
width: 92vw;
height:200px;
  justify-content: center;
  align-items: center;
  display: grid;
  column-gap:85%;
  grid-template-columns: repeat(2, 1fr);
 }
`

export function PricingCarouselBr ()
{
  

  
    const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "PrivateClass2.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    

      two: file(relativePath: { eq: "DuoClass.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }



  three: file(relativePath: { eq: "Headset.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
    return (
<div class="container">
     <IconContainers>
            <LeftIcon></LeftIcon>
            <RightIcon></RightIcon>
          </IconContainers>
    <input type="radio" name="slider" id="item-1" defaultChecked/>
    <input type="radio" name="slider" id="item-2"/>
    <input type="radio" name="slider" id="item-3"/>
        <div class="cards">
         
          <label class="card" for="item-1" id="song-1">
            <div class="bg1" >
              <TwoColumnsWrapPricing>
                
                <div class="textPlan1">
                  <h2>Aula Particular</h2>
                  <p>Aprenda o máximo em uma
                  <b> aula individual ao vivo </b>
                  com foco nas suas necessidades.</p>
                

                  <div class="priceContainer">
                    <h4>R$55/hr</h4>
                    </div>
                </div>
                <div class="imgc" >
                  <Img fluid={ data.one.childImageSharp.fluid } alt="Girl drinking tea with thumb up" />
                </div>
                </TwoColumnsWrapPricing>
            </div>
          </label>
          
          <label class="card" for="item-2" id="song-2">
            <div class="bg2" >
              <TwoColumnsWrapPricing>
                
                <div class="textPlan2">
                  <h2>Aula de dois alunos</h2>
                  <p>Aprenda com um parceiro
                  <b> em uma classe de dois alunos </b>
                  e cresça juntos.</p>
                  <div class="priceContainer">
                    <h4>R$39/hr</h4>
                    </div>
                  </div>
                <div class="imgc2" >
                  <Img fluid={ data.two.childImageSharp.fluid } alt="Two students smiling" />
                </div>
                </TwoColumnsWrapPricing>
            </div>
          </label>
          
          <label class="card" for="item-3" id="song-3">
            <div class="bg3" >
              <TwoColumnsWrapPricing>
                
                <div class="textPlan2">
                  <h2>Aula de chat</h2>
                  <p>Pratique suas habilidades de conversação
                   <b> em uma aula de chat </b> 
                   com um falante nativo da Argentina.</p>
                  <div class="priceContainer">
                    <h4>R$28</h4>
                    </div>
                </div>
                <div class="imgc3" >
                  <Img fluid={ data.three.childImageSharp.fluid } alt="headset" />
                </div>
                </TwoColumnsWrapPricing>
            </div>
    </label>
  </div>
  </div>
)
}