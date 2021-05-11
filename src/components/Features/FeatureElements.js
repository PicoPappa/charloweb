import styled from "styled-components"
import { AiFillStar,AiOutlineSchedule, AiFillMessage } from "react-icons/ai"
import { RiStethoscopeLine} from "react-icons/ri"

export const FeaturesSuperGod = styled.div`
    transform: skewY(-8deg);
background:#201f2f;
`

export const FeaturesGod = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom:140px;
      transform: skewY(8deg);

  padding-top:90px;
    @media screen and (max-width:690px){
    padding-top:120px;
    margin-bottom:0;
    }
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  padding-top:140px;
  margin: auto 20px auto auto;
`

export const ImageContainer2 = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: auto auto auto 20px;
`

export const TwoColumnsWrap = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* @media screen and (max-width:960px){
    width:100%;
    max-width: 800px;
    display:flex;
    flex-direction:column;
} */
`


export const TwoColumnsWrapJourney = styled.div`
  width: 90%;
  max-width: 850px;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: grid;
  column-gap:32px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width:690px){
    width:90%;
    max-width: 800px;
    display:flex;
    flex-direction:column;
    text-align:center;
}
`

export const TwoColumnsWrapPricing = styled.div`
  width: 90%;
  max-width: 850px;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width:690px){
    width:100%;
    max-width: 800px;
    display:flex;
    flex-direction:column;
} 

`

export const TwoColumnsWrapFeatures = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap:32px;
  @media screen and (max-width:820px){
    width:100%;
    max-width: 800px;
    display:flex;
    flex-direction:column;
}
`

export const TwoColumnsWrapPlans = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const ThreeColumnsWrap = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const Circle = styled.div`
align-self:center;
justify-content:center;
align-items:center;
width:0px;
height:0px;
padding:0;
border-radius:100px;
margin-bottom:70px;
transition: 0.8s all ease;
background: linear-gradient(rgba(75,78,165,1) 0%, rgba(223,79,180,1) 0%, rgba(123,67,255,1) 100%);
@media screen and (max-width: 690px) {
width:160px;
height:160px;
padding-top:32px;
padding-left:8px;
}
`

export const CircleJourney = styled.div`
align-self:center;
justify-content:center;
align-items:center;
margin-left:auto;
margin-right:auto;
width:0px;
height:0px;
padding:0;
border-radius:100px;
margin-bottom:150px;
transition: 0.8s all ease;
background: linear-gradient(rgba(75,78,165,1) 0%, rgba(223,79,180,1) 0%, rgba(123,67,255,1) 100%);
@media screen and (max-width: 690px) {
width:140px;
height:140px;
padding-top:32px;
padding-left:8px;
}
`

export const CircleFluidContainer = styled.div`
align-self:center;
width:0px;
height:0px;
transition: 0.8s all ease;
@media screen and (max-width: 690px) {
width:120px;
height:120px;
}
`
export const CircleJourneyFluidContainer = styled.div`
justify-content:center;
align-content:center;
align-self:center;
margin-left:auto;
margin-right:auto;
width:0px;

height:0px;
position:relative;
transition: 0.8s all ease;
@media screen and (max-width: 690px) {
top:-10px;
width:120px;
margin-bottom:42px;
height:120px;
}
`

export const CircleJourneyFluidContainerLevels = styled.div`
justify-content:center;
align-content:center;
align-self:center;
margin-left:auto;
margin-right:auto;
width:0px;
z-index:6;
height:0px;
position:relative;
transition: 0.8s all ease;
@media screen and (max-width: 690px) {
top:-10px;
width:120px;
margin-top:50px;
height:240px;
margin-bottom:16px;
}
`


export const FluidContainer = styled.div`
width:60%;
height:auto !important;
  -webkit-filter: drop-shadow(rgba(255, 255, 253, 0.1) 0px 3px 6px);

    transition: 0.8s all ease;
    margin-bottom:62px;
    @media screen and (max-height: 760px) {
    width:50%;
    margin-bottom:50px;
    }

    @media screen and (max-height: 500px) {
    width:40%;
    margin-bottom:20px;
    }

    
`

export const FeaturesCircleContainer = styled.div`
position:relative;
top:30px;
left:10px;
width:80%;
height:80%;
align-self:center;
justify-self:center;


`

export const FeaturesFluidContainer = styled.div`
width:340px;
height:340px;
align-self:center;
justify-content:center;
align-items:center;
margin-left:auto;
margin-right:auto;
margin-top:110px;
padding:20px;
position:relative;

border-radius:500px;
transition: 0.8s all ease;
background: linear-gradient(rgb(89, 220, 255) 0%,rgb(92, 141, 249) 0%,rgb(42, 91, 179) 100%);



@media screen and (max-width: 960px) {
   width:330px;
  }

@media screen and (max-width: 820px) {
    display:none;
  }

  @media screen and (max-width: 780px) {
    display:none;
  }

  @media screen and (max-width: 740px) {
    display:none;
  }

   @media screen and (max-width: 690px) {
    display:none;
  } 
`
export const PricingzFluidContainer = styled.div`

width: 300px;
    height: 300px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    top:-40px;
    /* margin-top: 110px; */
    padding: 20px;
    position: relative;
    border-radius: 500px;
    -webkit-transition: 0.8s all ease;
    transition: 0.8s all ease;
    
    background:#201F2F;
       @media screen and (max-width: 490px) {
    width:200px;
    height:200px;
  } 
`

export const JourneyFluidContainer = styled.div`
width:360px;
margin-top:30px;
align-self:center;
justify-content:center;
justify-self:center;
    transition: 0.8s all ease;

@media screen and (max-width: 960px) {
    width:300px;

  }

  @media screen and (max-width: 820px) {
    width:340px;

  }
  
  @media screen and (max-width: 780px) {
    width:320px;

  }

  @media screen and (max-width: 740px) {
    width:300px;
    margin-bottom:120px;
  }

   @media screen and (max-width: 690px) {
    display:none;
  }
`

export const JourneyFluidContainerLevels = styled.div`
width:200px;
margin-top:30px;
align-self:center;
justify-content:center;
justify-self:center;
    transition: 0.8s all ease;
    z-index:6;

@media screen and (max-width: 960px) {
    width:180px;

  }

  @media screen and (max-width: 820px) {
    width:160px;

  }
  
  @media screen and (max-width: 780px) {
    width:220px;

  }

  @media screen and (max-width: 740px) {
    width:200px;
    margin-bottom:120px;
  }

   @media screen and (max-width: 690px) {
    display:none;
  }
`
export const StaffFluidContainer = styled.div`
width:70%;
margin-top:16px;
margin-right:auto;
margin-left:auto;
    transition: 0.8s all ease;

@media screen and (max-width: 690px) {
  width:90%;
  }

   /* @media screen and (max-width: 690px) {
    display:none;
  } */
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`



export const FeaturesGrid = styled.div`
    display:grid;
    align-items: left;
    grid-template-columns: 200px 200px;
    grid-row: auto auto;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    margin-top:70px;
    @media screen and (max-width: 690px) {
    grid-template-columns:repeat(1,1fr);
     grid-column-gap: 0px;
     align-items: center;
     justify-content:center;
     text-align:center;
    }

`

export const Feature = styled.div`
display:flex;
flex-direction: column;
justify-content: left;
align-items: left;
@media screen and (max-width: 690px) {
justify-content:center;
align-items:center;
margin:auto;
width:200px;
}
`
export const FeatureIcon = styled.div`
display:flex;
padding:10px 0;
margin:0 0 0 0;
border-radius:6px;
align-items: left;
`

export const Icon1 = styled( AiFillStar )`
align-items: left;
color:rgb(65, 141, 255);;
font-size:40px;
`

export const Icon3 = styled( AiOutlineSchedule )`
align-items: left;
color:rgb(65, 141, 255);;
font-size:40px;
`
export const Icon2 = styled( RiStethoscopeLine )`
align-items: left;
color:rgb(65, 141, 255);
font-size:40px;
`

export const Icon4 = styled( AiFillMessage )`
align-items: left;
color:rgb(65, 141, 255);
font-size:40px;
`



export const FeatureDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #adaecd;
  margin-top: 30px;
  @media screen and (max-width: 690px) {
  margin-top: 16px;
  }
`