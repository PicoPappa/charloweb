import React, {useRef, useEffect} from "react"
import { ButtonHolderStaff } from "../Button/ButtonElements"

import Img from "gatsby-image"
import { StaffFluidContainer } from "../Features/FeatureElements"
import { StaffGod,StaffContainer, DataSubtitleStaff, DataTitleStaff, DataWrapStaff, StaffInfo, StaffInfoWidth,ThreeColumnsStaff, CertifyIcon, NativeIcon, SpecializedIcon, H6White } from "./StaffElements"
import ModalButton from "../Button/Button"
import { useStaticQuery, graphql } from "gatsby"
import { gsap, ScrollTrigger } from "gsap/all";
import ModalButtonBr from "../Button/ButtonBr"
import { DescriptionWhite, PricingSuperGod, JourneySuperGod } from "../Pricing/PricingElements"
import ModalButtonBrWhite from "../Button/ButtonBrWhite"





function StaffSectionBr (){
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
      <JourneySuperGod>
        <StaffGod ref={ref}>
            <a id="about-us">
                    
                <StaffContainer>
            <StaffInfo className="title">
              
                            <h3>Aprenda com</h3>
                        <h2>os melhores #1</h2>
                        
                        <StaffFluidContainer >
                        <Img fluid={ data.file.childImageSharp.fluid } alt="group of teachers on a classroom" />
                </StaffFluidContainer>
                <StaffInfoWidth>
                        <DescriptionWhite>Somos uma escola moderna feita para alunos modernos com mais de  <b>15 anos de experiência</b>. Nossos professores são <b>falantes nativos da Argentina</b> totalmente preparados para ajudá-lo a descobrir um novo mundo de forma eficaz e confortável. Atribuiremos a você um <b>professor especializado</b> que atenda às suas necessidades e o ajude a alcançar seus objetivos. Cada professor é <b>totalmente certificado</b>.</DescriptionWhite>
                        </StaffInfoWidth>
                        </StaffInfo>
                        
                    <ThreeColumnsStaff>
                        <DataWrapStaff>
                            <CertifyIcon/>
                            <DataSubtitleStaff>
Certificado</DataSubtitleStaff>
              </DataWrapStaff>
               
                        <DataWrapStaff>
                            <NativeIcon/>
                            <DataSubtitleStaff>Nativo</DataSubtitleStaff>
              </DataWrapStaff>
              <DataWrapStaff>
                            <SpecializedIcon/>
                            <DataSubtitleStaff>Especialista</DataSubtitleStaff>
                        </DataWrapStaff>
                       
                    </ThreeColumnsStaff>
                    </StaffContainer>
                    
            </a>
        </StaffGod>
            </JourneySuperGod>
            
  
        
    )
}

export default StaffSectionBr