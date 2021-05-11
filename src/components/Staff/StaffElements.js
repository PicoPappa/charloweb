import styled from "styled-components"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { BiWorld } from "react-icons/bi"
import {RiFocus2Fill} from "react-icons/ri"


export const StaffGod = styled.div`
  width: 100%;
  max-width: 900px;
  justify-content: center;
  align-items: center;
margin-left:auto;
margin-right:auto;
    transform: skewY(8deg);

/* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, rgba(25, 21, 35 ,1) 0%, rgba(44, 44, 89,1) 0%, rgba(89, 75, 145,1) 100%); */
  `

export const CertifyIcon = styled( AiFillSafetyCertificate )`
align-items: center;
color:white;
font-size:40px;
margin-bottom:10px;
`

export const NativeIcon = styled( BiWorld )`
align-items: center;
color:white;
font-size:40px;
margin-bottom:10px;
`

export const SpecializedIcon = styled( RiFocus2Fill )`
align-items: center;
color:white;
font-size:40px;
margin-bottom:10px;
`



export const StaffInfo = styled.div`

  width:100%;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  flex-direction:column;

  justify-content: center;
  align-items: center;
  text-align:center;
  
  `

  export const StaffInfoWidth = styled.div`
  width:80%;
  align-self:center;
  align-content:center;
  align-items:center;
  justify-content:center;
  justify-self:center;
  margin:auto;
    @media screen and (max-width: 1020px) {
    width:90%;
    }
  `

  export const StaffContainer = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left:auto;
  align-self:center;
  align-content:center;
  margin-right:auto;
`

  export const DataWrapStaff = styled.div`
  margin-top: 30px;
  display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
  `

export const DataTitleStaff = styled.h3`
font-size: 30px;
font-weight: 600;
color: white;
  @media screen and (max-width: 690px) {
    font-size:16px;
  }
`
export const H6White = styled.h6`
color:white;
`


export const DataSubtitleStaff = styled.h4`
font-size: 16px;
font-weight: 500;
color:white;
@media screen and (max-width: 690px) {
    font-size:14px;
  }
`

export const ThreeColumnsStaff = styled.div`
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 690px) {
    width:80%;
    column-gap:16px;
  }
`