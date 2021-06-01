import styled from "styled-components"
import { BsPeopleCircle } from "react-icons/bs"
import {BsFillCameraVideoFill} from "react-icons/bs"

export const JourneySuperGod = styled.div`
width:100%;
  box-shadow:0px 10px 20px rgba(0,0,0,0.6);
  padding-top:80px;
  padding-bottom:50px;
  z-index:5;
    background: linear-gradient(180deg,rgb(78, 143, 241) 0%,rgb(53, 98, 165) 100%);
    	transform: skewY(-8deg);
      margin-top:100px;
      padding-bottom:100px;

         @media screen and (max-width: 690px) {
        padding-top:50px;
        margin-top:50px;
        padding-bottom:50px;
        }

`

export const PricingSuperGod = styled.div`
width:100%;
  padding-top:50px;
  padding-bottom:50px;
  z-index:5;
    background: linear-gradient(180deg,rgb(78, 143, 241) 0%,rgb(53, 98, 165) 100%);
    	transform: skewY(-8deg);

         @media screen and (max-width: 690px) {
        padding-top:20px;
        padding-bottom:0;
        }

`

export const PlanContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 250px auto auto auto;
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%,rgba(32, 30, 46,1) 100%);
    text-align: center;

  `
export const PricingContainer = styled.div`
  display: flex;
  width:100%;
  max-width:700px;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  align-content:right;
  margin-right: 0;
  object-fit: contain;
  margin-top: -80px;
    text-align: right;
    margin:auto;
     @media screen and (max-width: 690px) {
       margin-bottom:26px;
       padding-left:8px;
       padding-right:8px;
     text-align:center;
    }

`

export const DescriptionWhite = styled.h5`
color:white;

`

export const GradientOffer = styled.h6`

  
  background: linear-gradient(to right, #DD4FB6 20%, #7C43FE 40%, #7C43FE 60%, #DD4FB6 80%);
  background-size: 200% auto;
  
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

`

export const WrapperClassFt = styled.div`
display:flex;
width:100;
height:fit-content;
margin-top:16px;

`

export const GradientLine = styled.div`
width:10px;
background:linear-gradient(180deg,rgba(75,78,165,1) 0%,rgba(66, 148, 255,1) 0%,rgba(123,67,255,1) 100%);

border-bottom-left-radius:4px;
border-top-left-radius:4px;
position:relative;
box-shadow:1px 5px 2px rgba(0,0,0,0.4);

`

export const GradientTittle = styled.h2`

  
  background: linear-gradient(to right, #4274ff 15%, #42adff 30%, #42adff 60%, #4274ff 75%);
  background-size: 200% auto;
  font-size:70px;
  color: white;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: shine 2s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

`

export const ClassFtContainer = styled.div`
margin-left:0;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
color:white;

padding:32px;
padding-left:0;
padding-right:0;
border-radius:4px;
row-gap:32px;
/* column-gap:90px; */
width:96%;
     @media screen and (max-width: 690px) {
     }
     @media screen and (max-width: 390px) {
     grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
     padding:16px;
     }
`

export const ClassFt = styled.div`
display:flex;
flex-direction:column;
row-gap:6px;
width:80px;
align-items:center;
justify-content:center;
`

export const ClassFtGrid = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
column-gap:16px;
row-gap:6px;

`

export const FtTitle = styled.h6`
font-size:20px;
color:white;
font-weight:600;
margin:0;
`
export const FtDescription = styled.h6`
font-size:14px;
color:white;
margin:0;
line-height:16px;
`

export const FtDescriptionMini = styled.h6`
font-size:10px;
color:white;
margin:0;
`

export const TwoColumnsPrice = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top:56px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const ColumnClassLeft = styled.div`
width:300px;
height:500px;
box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
border-radius:10px;
align-items:center;
margin:auto;
margin-right:16px;
justify-content:center;
background:white;

`

export const ColumnClassRight = styled.div`
width:300px;
height:500px;
box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
border-radius:10px;
align-items:center;
margin:auto;
margin-left:16px;
justify-content:center;
background: white;

`

export const Prici = styled.div`
align-items:center;
justify-content:center;
`

export const OfferCircle = styled.div`
width:30px;
height:30px;
border-radius:30px;
background-color:#6775FF;
position:absolute;
transform:translateX(-6%);
`
export const PriceGiant = styled.div`
margin-top:30px;
justify-content:center;
`

export const GiantTitle = styled.h2`
font-size:50px;
font-weight:600;
`

export const IconPrivate = styled( BsPeopleCircle )`
font-size:20px;
color:white;
`



export const IconCamera = styled( BsFillCameraVideoFill )`
font-size:20px;
color:white;
`