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
  max-width:700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  margin-top: -80px;
    text-align: center;
    margin:auto;

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