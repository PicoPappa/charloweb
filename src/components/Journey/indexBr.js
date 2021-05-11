import React, {useRef, useEffect} from "react"
import { Button, ButtonHolder } from "../Button/ButtonElements"
import { AiFillStar} from "react-icons/ai"
import Img from "gatsby-image"
import { TwoColumnsWrapJourney, ThreeColumnsWrap, FeaturesContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1,ImageContainer2, JourneyFluidContainer, CircleJourney, CircleJourneyFluidContainerLevels, FeaturesFluidContainer, FeaturesCircleContainer, JourneyFluidContainerLevels } from "../Features/FeatureElements"
import { SectionGod, DataWrap, DataSubtitle, DataIcon1, DataHolder, DataIcon2, DataIcon3, DataIcon4 } from "./JourneyElements";
import { gsap, ScrollTrigger } from "gsap/all";
import { useStaticQuery, graphql } from "gatsby"
import ModalButton from "../Button/Button"
import backgroundVideo from "../../videos/video.webm"
import styled from "styled-components"
import "./journeyStyle.css"



export const videoStyle=styled.video`
  width:100vw;
  position: absolute;
`

export default function NeedsSection ()
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
      file(relativePath: { eq: "LEVELS.png" }) {
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
              <a id="levels">
      <SectionGod ref={ ref }>

          
            
          

            <TwoColumnsWrapJourney>
                   
          <div>
                    <FeaturesContainer className="title">
                            <h3>Aulas para</h3>
                    <h2>Todos os níveis</h2>
                    <h5>Não importa se você é um iniciante ou se está no meio do caminho.
Nós o preparamos para fazer os exames que permitirão que você trabalhe em todo o mundo.</h5>
                    <DataHolder>
                        <DataWrap>
                            <DataIcon1></DataIcon1>
                            <DataSubtitle>Amigável para iniciantes</DataSubtitle>
                        </DataWrap>
                        <DataWrap>
                            <DataIcon2></DataIcon2>
                            <DataSubtitle>Corrigi seus documentos e apresentações</DataSubtitle>
                        </DataWrap>
                        <DataWrap>
                            <DataIcon4></DataIcon4>
                            <DataSubtitle>Prepare seus exames de espanhol</DataSubtitle>
                        </DataWrap>
                    </DataHolder>
                    
          </FeaturesContainer>

          </div>
                    <JourneyFluidContainerLevels >
                            <Img fluid={ data.file.childImageSharp.fluid } alt="" className="pic"   />
                            </JourneyFluidContainerLevels>
          </TwoColumnsWrapJourney>
          <CircleJourneyFluidContainerLevels>
              <Img fluid={ data.file.childImageSharp.fluid } alt="" />
            </CircleJourneyFluidContainerLevels>

            
      </SectionGod>
      </a>
            
            
  
        
    )
}
