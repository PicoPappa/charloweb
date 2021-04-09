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
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 200px auto auto auto;
  @media screen and (max-width: 690px) {
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