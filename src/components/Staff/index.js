import React, {useRef, useEffect} from "react"
import { ButtonHolderStaff } from "../Button/ButtonElements"

import Img from "gatsby-image"
import { StaffFluidContainer } from "../Features/FeatureElements"
import { StaffGod,StaffContainer, DataSubtitleStaff, DataTitleStaff, DataWrapStaff, StaffInfo, StaffInfoWidth,ThreeColumnsStaff } from "./StaffElements"
import ModalButton from "../Button/Button"
import { useStaticQuery, graphql } from "gatsby"
import { gsap, ScrollTrigger } from "gsap/all";





function StaffSection (){
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef( null );

  useEffect( () =>
  {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".pic"),
      {
        duration:0.6,
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
        x: -50
      },
      {
        duration:1,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".title"),
          start: "center 1100px",
          scurb:1
        }
    } );
  }, [] );
    
        const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Staff2.png" }) {
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
        <StaffGod ref={ref}>
            <a id="about-us">
                    
                <StaffContainer>
            <StaffInfo className="title">
              
                            <h6>TUTORS</h6>
                            <h3>Learn with</h3>
                        <h2>the best #1</h2>
                        
                        <StaffFluidContainer >
                        <Img fluid={ data.file.childImageSharp.fluid } alt="" />
                </StaffFluidContainer>
                <StaffInfoWidth>
                        <h5>We’re a modern school made for modern students with <b>30+ years of experience</b>. Our teachers are <b>native speakers</b> fully prepared to help you discover a new world in an effective and comfortable way. We’ll assign you a <b>specialized teacher</b> that fits your needs and helps you reach your goals. Every teacher is <b>fully certified and prepared</b> to teach you.</h5>
                        </StaffInfoWidth>
                        </StaffInfo>
                        
                    <ThreeColumnsStaff>
                        <DataWrapStaff>
                            <DataTitleStaff>+5500</DataTitleStaff>
                            <DataSubtitleStaff>Students</DataSubtitleStaff>
                        </DataWrapStaff>
                        <DataWrapStaff>
                            <DataTitleStaff>+5500</DataTitleStaff>
                            <DataSubtitleStaff>Students</DataSubtitleStaff>
                        </DataWrapStaff>
                        <DataWrapStaff>
                            <DataTitleStaff>+5500</DataTitleStaff>
                            <DataSubtitleStaff>Students</DataSubtitleStaff>
                        </DataWrapStaff>
                    </ThreeColumnsStaff>
                    <ButtonHolderStaff>
                     <ModalButton>Try 1-on-1 class free</ModalButton>
                      <p>No credit card needed.</p>
                    </ButtonHolderStaff>
                    </StaffContainer>
                    
            </a>
        </StaffGod>
            
            
  
        
    )
}

export default StaffSection