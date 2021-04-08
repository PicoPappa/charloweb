import React, {useRef,useEffect} from "react"
import { Button, ButtonHolderCenter } from "../Button/ButtonElements"
import { AiFillStar} from "react-icons/ai"
import Image from "../image"
import Img from "gatsby-image"
import { TwoColumnsWrap, ThreeColumnsWrap, FeaturesContainer, FeaturesGrid, Feature, FeatureIcon, FeaturesGod, Icon1 } from "../Features/FeatureElements"
import { SectionPricingGod, DataWrap, DataTitle, DataSubtitle } from "../Journey/JourneyElements"
import { PlanContainer, PricingContainer, TwoColumnsPrice, ColumnClassLeft, ColumnClassRight } from "../Pricing/PricingElements"
import { PricingCarousel } from "../Pricing/PriceCarousel"
import { gsap, ScrollTrigger } from "gsap/all";
import ModalButton from "../Button/Button"




function PricingSection ()
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
                        
                        <h6>PRICING</h6>
                        <h3>Choose your</h3>
                        <h2>class plan</h2>
            <h5>Discover the best online courses <b>for your time and budget</b>.
             Explore a different world while enjoying 100% live lessons with a 
               <b> native teacher</b>. Each teacher will design a <b>personalized programme</b> so you can learn effectively and comfortably. We strongly believe that large groups sacrifices quality, so we only allow
                         groups with a maximum of two students so the teachers can <b>pay full attention to you</b>.</h5>
                <PricingCarousel className="plans"/>     
                
                        
            </PricingContainer>
            <ButtonHolderCenter>
                            
                            <ModalButton>Try 1-on-1 class free</ModalButton>
                            <p>No credit card needed.</p>
                         </ButtonHolderCenter>
                    
                    </a>
            
        </SectionPricingGod>
            
            
  
        
    )
}

export default PricingSection