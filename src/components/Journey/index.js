import React, {useRef, useEffect} from "react"
import { Button, ButtonHolder } from "../Button/ButtonElements"
import { AiFillStar} from "react-icons/ai"
import Image from "../image"
import Img from "gatsby-image"
import { TwoColumnsWrapJourney, ThreeColumnsWrap, FeaturesContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1,ImageContainer2, JourneyFluidContainer, CircleJourney, CircleJourneyFluidContainer, FeaturesFluidContainer, FeaturesCircleContainer } from "../Features/FeatureElements"
import { SectionGod, DataWrap, DataTitle, DataSubtitle } from "./JourneyElements";
import { gsap, ScrollTrigger } from "gsap/all";
import { useStaticQuery, graphql } from "gatsby"
import ModalButton from "../Button/Button"
import backgroundVideo from "../../videos/video.mp4"
import styled from "styled-components"
import "./journeyStyle.css"



export const videoStyle=styled.video`
  width:100vw;
  position: absolute;
`

function JourneySection ()
{
      gsap.registerPlugin(ScrollTrigger);

  const ref = useRef( null );

  useEffect( () =>
  {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".pic"),
      {
        duration:1,
        opacity: 0,
        x: 50
      },
      {
        duration:1,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".pic"),
          start: "bottom 1000px",
          scurb:1
        }
    } );
  }, [] );

  useEffect( () =>
  {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".title"),
      {
        duration:1,
        opacity: 0,
        y: -50
      },
      {
        duration:1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".title"),
          start: "center 1100px",
          scurb:1
        }
    } );
  }, [] );




        const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "JourneySectionImage.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
      <SectionGod ref={ ref }>
        <a id="journeyAnchor">
          
          <CircleJourney>
            <CircleJourneyFluidContainer>
              <Img fluid={ data.file.childImageSharp.fluid } alt="" />
            </CircleJourneyFluidContainer>
          </CircleJourney>
          

            <TwoColumnsWrapJourney>
                   
          <div>
                    <FeaturesContainer className="title">
                            <h6>EXPERIENCE</h6>
                            <h3>Discover a</h3>
                    <h2>wonderful culture</h2>
                    <h5>Take your the time get to know the joy of the culture, music and literature ride with us.</h5>
                    <ThreeColumnsWrap>
                        <DataWrap>
                            <DataTitle>+5500</DataTitle>
                            <DataSubtitle>Students</DataSubtitle>
                        </DataWrap>
                        <DataWrap>
                            <DataTitle>+5500</DataTitle>
                            <DataSubtitle>Students</DataSubtitle>
                        </DataWrap>
                        <DataWrap>
                            <DataTitle>+5500</DataTitle>
                            <DataSubtitle>Students</DataSubtitle>
                        </DataWrap>
                    </ThreeColumnsWrap>
                    
          </FeaturesContainer>
          <ButtonHolder>
                     <ModalButton>Try 1-on-1 class free</ModalButton>
                      <p>No credit card needed.</p>
                    </ButtonHolder>
          </div>
                    <JourneyFluidContainer className="pic" >
                            <Img fluid={ data.file.childImageSharp.fluid } alt=""   />
                            </JourneyFluidContainer>
                </TwoColumnsWrapJourney>
            </a>
        </SectionGod>
            
            
  
        
    )
}

export default JourneySection