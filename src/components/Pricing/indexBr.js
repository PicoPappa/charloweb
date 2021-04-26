import React, {useRef,useEffect} from "react"
import { Button, ButtonHolderCenter } from "../Button/ButtonElements"
import { AiFillStar} from "react-icons/ai"

import Img from "gatsby-image"
import { TwoColumnsWrap, ThreeColumnsWrap, FeaturesContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1 } from "../Features/FeatureElements"
import { SectionPricingGod, DataWrap, DataTitle, DataSubtitle } from "../Journey/JourneyElements"
import { PlanContainer, PricingContainer, TwoColumnsPrice, ColumnClassLeft, ColumnClassRight, ClassFtContainer, ClassFt, ClassFtGrid, GradientOffer, GradientTittle, FtTitle,FtDescription, WrapperClassFt, GradientLine } from "./PricingElements"
import { gsap, ScrollTrigger } from "gsap/all";
import ModalButton from "../Button/Button"
import ModalButtonBr from "../Button/ButtonBr"
import { ContactFormFunction } from "./PriceCarouselBr"




function PricingSectionBr ()
{
    
gsap.registerPlugin(ScrollTrigger);

  const ref = useRef( null );

  useEffect( () =>
  {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".plans"),
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
          trigger: element.querySelector(".plans"),
          start: "bottom 1000px",
          scurb:1
        }
    } );
  }, [] );

  useEffect( () =>
  {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".text"),
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
          trigger: element.querySelector(".text"),
          start: "center 1100px",
          scurb:1
        }
    } );
  }, [] );

    return (
        <SectionPricingGod ref={ref} >
            <a id="pricing">
                
                    <PricingContainer className="text" >
                        
            {/* <GradientOffer>OFERTA</GradientOffer> */}

                        <h3>Experimente sua</h3>
                        <GradientTittle>aula de bem-vinda!</GradientTittle>
            <h5> Escolher um curso que você goste e encontrar o melhor programa para você é uma tarefa importante. Aproveite nossa oferta única de boas-vindas para testar nossas aulas. 
              <br/><br/>Esteja ciente de que você pode aceitar esta oferta apenas uma vez.</h5> 
            {/* <h6>RECURSOS DE AULA</h6> */}
            
            <WrapperClassFt>
            <GradientLine></GradientLine>
            <ClassFtContainer>
              <ClassFt>
                <FtTitle>
                  Modalidade
                </FtTitle>
                <FtDescription>
                  online
                </FtDescription>
              </ClassFt>

              <ClassFt>
                <FtTitle>
                  Duração
                </FtTitle>
                <FtDescription>
                  1 hora
                </FtDescription>
              </ClassFt>

              <ClassFt>
                <FtTitle>
                  Plataforma
                </FtTitle>
                <FtDescription>
                  Zoom
                </FtDescription>
              </ClassFt>

                 <ClassFt>
                <FtTitle>
                  Preço
                </FtTitle>
                <FtDescription>
                  R$27
                </FtDescription>
              </ClassFt>

                <ClassFt>
                <FtTitle>
                    Requisitos
                </FtTitle>
  
                  <FtDescription>
                    nenhum
                       </FtDescription>

                
              </ClassFt>

             




            </ClassFtContainer>
                    
                </WrapperClassFt>
                        
          </PricingContainer>
          
           
            {/* <ButtonHolderCenter>
                            
                            <ModalButtonBr>Try 1-on-1 class free</ModalButtonBr>
                         </ButtonHolderCenter> */}
                    
        </a>
        <ContactFormFunction className="plans"/>
            
        </SectionPricingGod>
            
            
  
        
    )
}

export default PricingSectionBr