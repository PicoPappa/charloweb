import styled from "styled-components"

export const Button = styled.a`
    transition: 0.8s all ease;
  padding: 15px 60px;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(66, 148, 255,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  justify-content:center;
  align-items:center;
  
  &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
        transform: translatey(-10%);
        transition:all 0.4s ease;
    }
  @media screen and (max-width:690px){
  display:none;
}
`

export const ButtonStaff = styled.button`
    transition: 0.8s all ease;
  padding: 15px 30px;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(66, 148, 255,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  justify-content:center;
  align-items:center;
  &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
        transform: translatey(-10%);
        transition:all 0.4s ease;
    }
  @media screen and (max-width:690px){
  display:none;
}
`


export const ButtonMobile = styled.a`
    transition: 0.8s all ease;
  
  padding: 15px 60px;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(66, 148, 255,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  justify-content:center;
  align-items:center;
  &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
        transform: translatey(-10%);
        transition:all 0.4s ease;
    }
  @media screen and (max-width:690px){
  width:100vw;
  margin:auto;
  border-radius:0;
}

`

export const ButtonCenter = styled.button`
  padding: 15px 30px;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(66, 148, 255,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  margin-top:46px;
      color:${( { click } ) => ( click ? "white" : "#998faa" )};
    background:${( { click } ) => ( click ? "background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(66, 148, 255,1) 0%, rgba(123,67,255,1) 100%)" : "#554e63" )};
    pointer-events:${( { click } ) => ( click ? "auto":"none")}; 
  transition:0.8 all ease;
   &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
        transform: translatey(-10%);
        transition:all 0.4s ease;
    }
  input:disabled {
  background: #ccc;
  
}
@media screen and (max-width: 904px) {
  font-size:12px;
}
@media screen and (max-width: 346px) {
  font-size:11px;
}
@media screen and (max-width: 320px) {
  font-size:9px;
}
`





export const ButtonHolder = styled.div`
margin-top:36px;
display:flex;
color:#ADAECD;
font-size:16px;
width:400px;
align-items:center;
column-gap:16px;
@media screen and (max-width: 960px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:180px;
  text-align:center;
  row-gap:10px;
  margin-left:auto;
  margin-right:auto;
}
@media screen and (max-width: 690px) {
  display:none;
}

`

export const ButtonHolderCenter = styled.div`
margin-top:60px;
display:flex;
color:#ADAECD;
font-size:16px;
width:400px;
align-items:center;
margin-left:auto;
margin-right:auto;
justify-content:center;
@media screen and (max-width: 960px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:180px;
  text-align:center;
  margin-left:auto;
  margin-right:auto;
}
@media screen and (max-width: 690px) {
  display:none;
}

`

export const ButtonHolderStaff = styled.div`
margin-top:50px;
display:flex;
color:#ADAECD;
font-size:16px;
width:400px;
align-items:center;
justify-content:center;
@media screen and (max-width: 960px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:180px;
  text-align:center;
}

@media screen and (max-width: 690px) {
  display:none;
}
`


export const ButtonHolderMobile = styled.div`
margin-top:36px;
display:flex;
color:#ADAECD;
font-size:16px;
width:400px;
align-items:center;
flex-direction:column;
row-gap:16px;
justify-content:center;
@media screen and (max-width: 960px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:180px;
  text-align:center;
  row-gap:10px;
}

@media screen and (max-width: 690px) {
  background-color:#14121E;
  box-shadow:0px -5px 20px rgba(20, 18, 30,0.2);
position: fixed;
bottom:0;
left:0;
  width:100vw;
  align-items:center;
  justify-content:center;
  z-index:999;
padding-bottom:5px;
}
`