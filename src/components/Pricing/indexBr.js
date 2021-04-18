import React, {useRef,useEffect} from "react"
import { Button, ButtonHolderCenter } from "../Button/ButtonElements"
import { AiFillStar} from "react-icons/ai"

import Img from "gatsby-image"
import { TwoColumnsWrap, ThreeColumnsWrap, FeaturesContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1 } from "../Features/FeatureElements"
import { SectionPricingGod, DataWrap, DataTitle, DataSubtitle } from "../Journey/JourneyElements"
import { PlanContainer, PricingContainer, TwoColumnsPrice, ColumnClassLeft, ColumnClassRight } from "./PricingElements"
import { PricingCarouselBr } from "./PriceCarouselBr"
import { gsap, ScrollTrigger } from "gsap/all";
import ModalButton from "../Button/Button"
import ModalButtonBr from "../Button/ButtonBr"




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
                        
                        <h6>PREÇOS</h6>
                        <h3>Escolha o</h3>
                        <h2>seu curso</h2>
            <h5> Descubra os melhores cursos online <b> para o seu tempo e orçamento </b>.
             Explore um mundo diferente enquanto desfruta de aulas 100% ao vivo com um
               <b> professor nativo da Argentina </b>. Acreditamos fortemente que grandes grupos sacrificam a qualidade, por isso só permitimos
                         grupos com no máximo dois alunos para que os professores <b> prestem atenção total em você </b>. Recomendamos que você primeiro faça uma <b>aula gratuita</b> para ver se gosta sem gastar dinhero. </h5>
                <PricingCarouselBr className="plans"/>     
                
                        
            </PricingContainer>
            <ButtonHolderCenter>
                            
                            <ModalButtonBr>Try 1-on-1 class free</ModalButtonBr>
                         </ButtonHolderCenter>
                    
                    </a>
            
        </SectionPricingGod>
            
            
  
        
    )
}

export default PricingSectionBr