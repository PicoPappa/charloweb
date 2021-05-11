import styled from "styled-components"
import { Link } from "gatsby"
import { AiFillStar } from "react-icons/ai"
import { RiChatCheckFill } from "react-icons/ri"
import { CgFileDocument } from "react-icons/cg"
import {GiSoccerBall,GiWeightLiftingUp} from "react-icons/gi"

export const SectionGod = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 100px auto auto auto;
  
  @media screen and (max-width: 690px) {
  width:90%;
    margin: 80px auto auto auto;

  }
  `

  export const SectionPricingGod = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  max-width: 1000px;
  justify-content: center;
  justify-items:center;
  align-items: center;
  align-content:center;
  margin-left:auto;
  z-index:5;
  margin-right:auto;
    height:100%;
  border-radius:10px;
  padding:50px;
  	transform: skewY(8deg);

  @media screen and (max-width: 690px) {
    padding:0;
    padding-top:32px;
    display:flex;
    flex-direction:column;
  margin: 0;
  border-radius:0;
  margin-top:40px;
    z-index:5;


  }
  `

export const DataHolder = styled.div`
  display:flex;
  flex-direction:column;
  align-content:center;
  
  margin-right:auto;
  margin-top:16px;
  `

  export const DataWrap = styled.div`
  margin-top: 16px;
  display:flex;
flex-direction: row;
justify-content: left;
align-items: left;
column-gap:16px;
  `

export const DataIcon1 = styled(RiChatCheckFill)`
font-size: 30px;
font-weight: 600;
color: rgb(65, 141, 255);
margin-top:auto;
margin-bottom:auto;
  @media screen and (max-width: 690px) {
    font-size:30px;
  }
`


export const DataIcon2 = styled(CgFileDocument)`
font-size: 30px;
font-weight: 600;
color: rgb(65, 141, 255);
margin-top:auto;
margin-bottom:auto;
  @media screen and (max-width: 690px) {
    font-size:30px;
  }
`

export const DataIcon3 = styled(GiSoccerBall)`
font-size: 30px;
font-weight: 600;
color: rgb(65, 141, 255);
stroke:rgb(65, 141, 255);
margin-top:auto;
margin-bottom:auto;
  @media screen and (max-width: 690px) {
    font-size:30px;
  }
`
export const DataIcon4 = styled(GiWeightLiftingUp)`
font-size: 30px;
font-weight: 600;
color: rgb(65, 141, 255);
stroke:rgb(65, 141, 255);
margin-top:auto;
margin-bottom:auto;
  @media screen and (max-width: 690px) {
    font-size:30px;
  }
`

export const DataSubtitle = styled.h4`
font-size: 16px;
font-weight: 300;
color: white;
text-align:left;
margin-top:auto;
margin-bottom:auto;
`