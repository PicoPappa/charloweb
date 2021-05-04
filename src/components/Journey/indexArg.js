import React, {useRef, useEffect} from "react"
import { Button, ButtonHolder } from "../Button/ButtonElements"
import { AiFillStar} from "react-icons/ai"
import Img from "gatsby-image"
import { TwoColumnsWrapJourney, ThreeColumnsWrap, FeaturesContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1,ImageContainer2, JourneyFluidContainer, CircleJourney, CircleJourneyFluidContainer, FeaturesFluidContainer, FeaturesCircleContainer } from "../Features/FeatureElements"
import { SectionGod, DataWrap, DataSubtitle, DataIcon1, DataHolder, DataIcon2, DataIcon3 } from "./JourneyElements";
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

export default function NeedsSectionArg ()
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
      file(relativePath: { eq: "argentina2.png" }) {
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
          

            <CircleJourneyFluidContainer>
              <Img fluid={ data.file.childImageSharp.fluid } alt="" />
            </CircleJourneyFluidContainer>

          

            <TwoColumnsWrapJourney>
                   
          <div>
                    <FeaturesContainer className="title">
                            <h6>NECESSIDADES</h6>
                            <h3>Adapte-se à</h3>
                    <h2>vida na Argentina</h2>
                    <h5>Recebemos muitos brasileiros <b>estudando em universidades argentinas</b>. Também temos muitos alunos que vieram ao nosso <b>país para trabalhar</b>. Em qualquer caso, vamos ajudá-lo a se adaptar para sobreviver à nossa língua!</h5>
                    <DataHolder>
                        <DataWrap>
                            <DataIcon1></DataIcon1>
                            <DataSubtitle>Aprenda nossa linguagem cotidiana</DataSubtitle>
                        </DataWrap>
                        <DataWrap>
                            <DataIcon2></DataIcon2>
                            <DataSubtitle>Corrigi seus documentos e apresentações</DataSubtitle>
                        </DataWrap>
                        <DataWrap>
                            <DataIcon3></DataIcon3>
                            <DataSubtitle>Conheça nossa cultura</DataSubtitle>
                        </DataWrap>
                    </DataHolder>
                    
          </FeaturesContainer>
          <ButtonHolder>
                     <ModalButton></ModalButton>

                    </ButtonHolder>
          </div>
                    <JourneyFluidContainer  >
                            <Img fluid={ data.file.childImageSharp.fluid } alt="" className="pic"  />
                            </JourneyFluidContainer>
                </TwoColumnsWrapJourney>
            </a>
        </SectionGod>
            
            
  
        
    )
}
