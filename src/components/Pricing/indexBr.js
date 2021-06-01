import React, {useRef,useEffect} from "react"
import { Button, ButtonHolderCenter } from "../Button/ButtonElements"
import { AiFillStar} from "react-icons/ai"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { TwoColumnsWrap, ThreeColumnsWrap, FeaturesContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1 } from "../Features/FeatureElements"
import { SectionPricingGod, DataWrap, DataTitle, DataSubtitle } from "../Journey/JourneyElements"
import { PlanContainer, PricingContainer, TwoColumnsPrice, ColumnClassLeft, ColumnClassRight, ClassFtContainer, ClassFt, ClassFtGrid, GradientOffer, GradientTittle, FtTitle,FtDescription, FtDescriptionMini, WrapperClassFt, GradientLine, OfferCircle, PriceGiant, GiantTitle, PricingSuperGod, DescriptionWhite, IconPrivate, IconCamera } from "./PricingElements"
import { gsap, ScrollTrigger } from "gsap/all";
import ModalButton from "../Button/Button"
import ModalButtonBr from "../Button/ButtonBr"
import { ContactFormFunction } from "./PriceCarouselBr"
import ModalButtonBrWhite from "../Button/ButtonBrWhite"
import ModalButtonBrWhiteTwo from "../Button/ButtonBr"




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

      const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "zoom.png" }) {
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
     <a id="pricing">
      <PricingSuperGod>
        <SectionPricingGod ref={ref} >
           
                
                    <PricingContainer className="text" >
                        
            {/* <GradientOffer>OFERTA</GradientOffer> */}

                        <h3>Experimente</h3>
            <h2>uma aula individual</h2>
            
            <DescriptionWhite> Escolher um curso que você goste e encontrar o melhor programa para você é uma tarefa importante. Recomendamos primeiro testar uma aula de graça pela <b>metade do preço</b>.
            
              <br /><br />O curso é <b>individual</b>, você terá um professor dedicado só para você.
<br/><br/>Esta aula está disponível apenas para residentes na <b>Argentina</b> e no <b>Brasil</b>.
             </DescriptionWhite> 
            {/* <h6>RECURSOS DE AULA</h6> */ }
            <ModalButtonBrWhiteTwo></ModalButtonBrWhiteTwo>

          </PricingContainer>
          
           
            {/* <ButtonHolderCenter>
                            
                            <ModalButtonBr>Try 1-on-1 class free</ModalButtonBr>
                         </ButtonHolderCenter> */}
                    
                    
        </SectionPricingGod>
      </PricingSuperGod>
      </a>
            
  
        
    )
}

export default PricingSectionBr