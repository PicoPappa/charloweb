import React, {useRef, useEffect} from "react"
import {ButtonHolder } from "../Button/ButtonElements"
import Img from "gatsby-image"
import { TwoColumnsWrapFeatures, FeaturesContainer, FeaturesCircleContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1, FeatureDescription, Icon2, Icon3, Icon4 , ImageContainer, FeaturesFluidContainer} from "./FeatureElements"
import { useStaticQuery, graphql } from "gatsby"
import ModalButton from "../Button/Button"
import { gsap, ScrollTrigger } from "gsap/all";






function FeaturesSection (){
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
              <FeaturesGod ref={ref}>
                <a id="features">    
                  <TwoColumnsWrapFeatures className="title">

                    
                    <FeaturesFluidContainer >
                      <FeaturesCircleContainer>
                        <Img fluid={ data.two.childImageSharp.fluid } alt="" />
                        </FeaturesCircleContainer>
                    </FeaturesFluidContainer>
                    


                    <div>
                    <FeaturesContainer  >
                            <h6>FEATURES</h6>
                            <h3>What you will</h3>
                            <h2>get from us?</h2>
                                <FeaturesGrid>
                                <Feature>
                                    <FeatureIcon><Icon1/></FeatureIcon>
                                        <h4>Expert mentoring</h4>
                                        <FeatureDescription>Native mentors with plenty of experience</FeatureDescription>
                        </Feature>    
                                <Feature>
                                    <FeatureIcon><Icon2/></FeatureIcon>
                                        <h4>Adaptative classes</h4>
                                        <FeatureDescription>After an interview, we create a programme just for you.</FeatureDescription>
                        </Feature>
                        
                        <Feature>
                                    <FeatureIcon><Icon3/></FeatureIcon>
                                        <h4>Flexible schedules</h4>
                                        <FeatureDescription>You decide when and we show up.</FeatureDescription>
                        </Feature>
                        
                        
                        
                        <Feature>
                                    <FeatureIcon><Icon4/></FeatureIcon>
                                        <h4>Talking skills</h4>
                                        <FeatureDescription>Strongly focused on communication </FeatureDescription>
                                    </Feature>
                    </FeaturesGrid>
                    
                     
                    </FeaturesContainer>
                 <ButtonHolder>
                     <ModalButton>Try 1-on-1 class free</ModalButton>
                      <p>No credit card needed.</p>
                    </ButtonHolder>
                    </div>
                </TwoColumnsWrapFeatures>
                </a>
              </FeaturesGod>
              
            
            
  
        
    )
}


export default FeaturesSection