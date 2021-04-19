import styled from "styled-components"
import { Link } from "gatsby"
import { AiFillStar} from "react-icons/ai"

export const SectionGod = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 200px auto auto auto;
  
  @media screen and (max-width: 690px) {
  width:90%;
  }
  `

  export const SectionPricingGod = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 200px auto auto auto;
  box-shadow:0px 10px 20px rgba(0,0,0,0.6);
    height:100%;
  border-radius:10px;
  background: linear-gradient(180deg,  rgb(56, 54, 81,1) 0%, rgba(34, 28, 43,1) 100%);
  padding:50px;
  @media screen and (max-width: 690px) {
    padding:16px;
    padding-top:32px;
    display:flex;
    flex-direction:column;
  width:90%;
  }
  `

  export const DataWrap = styled.div`
  margin-top: 30px;
  display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
  `

export const DataTitle = styled.h3`
font-size: 30px;
font-weight: 600;
color: white;
  @media screen and (max-width: 690px) {
    font-size:22px;
  }
`

export const DataSubtitle = styled.h4`
font-size: 16px;
font-weight: 300;
color: white;
`