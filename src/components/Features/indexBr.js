import React, {useRef, useEffect} from "react"
import {ButtonHolder } from "../Button/ButtonElements"
import Img from "gatsby-image"
import { TwoColumnsWrapFeatures, FeaturesContainer, FeaturesCircleContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1, FeatureDescription, Icon2, Icon3, Icon4 , ImageContainer, FeaturesFluidContainer, FeaturesSuperGod} from "./FeatureElements"
import { useStaticQuery, graphql } from "gatsby"
import ModalButton from "../Button/Button"
import { gsap, ScrollTrigger } from "gsap/all";
import ModalButtonBr from "../Button/ButtonBr"






function FeaturesSectionBr (){
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
        x: -50
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
      one:file(relativePath: { eq: "FeaturesSectionImage2.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    

    
      two:file(relativePath: { eq: "Headset.png" }) {
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
              <FeaturesSuperGod>
              <FeaturesGod ref={ref}>
                <a id="features">    
                  <TwoColumnsWrapFeatures>

                    
                    <FeaturesFluidContainer  >
                      <FeaturesCircleContainer className="pic">
                        <Img fluid={ data.two.childImageSharp.fluid } alt="headset" />
                        </FeaturesCircleContainer>
                    </FeaturesFluidContainer>
                    


                    <div>
                    <FeaturesContainer  className="title" >
                            <h3>O que você vai</h3>
                            <h2>conseguir de nós?</h2>
                                <FeaturesGrid>
                                <Feature>
                                    <FeatureIcon><Icon1/></FeatureIcon>
                                        <h4>Mentoria especializada</h4>
                                        <FeatureDescription>Professores nativos com muita experiência</FeatureDescription>
                        </Feature>    
                                <Feature>
                                    <FeatureIcon><Icon2/></FeatureIcon>
                                        <h4>Aulas Adaptativas</h4>
                                        <FeatureDescription>Depois de uma aula de graça, criamos um programa só para você.</FeatureDescription>
                        </Feature>
                        
                        <Feature>
                                    <FeatureIcon><Icon3/></FeatureIcon>
                                        <h4>Horários flexíveis</h4>
                                        <FeatureDescription>Você decide quando e nós apareceremos.</FeatureDescription>
                        </Feature>
                        
                        
                        
                        <Feature>
                                    <FeatureIcon><Icon4/></FeatureIcon>
                                        <h4>Habilidades de fala</h4>
                                        <FeatureDescription>Fortemente focado na comunicação</FeatureDescription>
                                    </Feature>
                    </FeaturesGrid>
                    
                     
                    </FeaturesContainer>
                    </div>
                </TwoColumnsWrapFeatures>
                </a>
              </FeaturesGod>
              </FeaturesSuperGod>
            
            
  
        
    )
}


export default FeaturesSectionBr