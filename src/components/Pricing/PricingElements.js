import styled from "styled-components"


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
  justify-content: center;
  align-items: left;
  object-fit: contain;
  margin-top: -80px;
    text-align: left;
    margin:auto;
     @media screen and (max-width: 690px) {
     text-align:center;
    }

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
left:10px;

`

export const GradientTittle = styled.h2`

  
  background: linear-gradient(to right, #4274ff 15%, #42adff 30%, #42adff 60%, #4274ff 75%);
  background-size: 200% auto;
  
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
  background: linear-gradient(180deg,  rgb(56, 54, 81,1) 0%, rgba(34, 28, 43,1) 100%);

padding:32px;
padding-left:42px;
box-shadow:0 5px 2px rgba(0,0,0,0.4);
border-radius:4px;
row-gap:32px;
/* column-gap:90px; */
width:96%;
     @media screen and (max-width: 690px) {
     background:rgb(56, 54, 81,1);
     }
`

export const ClassFt = styled.div`
display:flex;
flex-direction:column;
row-gap:6px;
`
export const FtTitle = styled.h6`
font-size:10px;
color:white;
font-weight:400;
margin:0;
`
export const FtDescription = styled.h6`
font-size:14px;
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