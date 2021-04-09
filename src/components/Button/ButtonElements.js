import styled from "styled-components"

export const Button = styled.button`
    transition: 0.8s all ease;
  padding: 15px 30px;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(223,79,180,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  justify-content:center;
  align-items:center;
  &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 10px rgba(0,0,0,1);
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
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(223,79,180,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  justify-content:center;
  align-items:center;
  &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 10px rgba(0,0,0,0.4);
        transform: translatey(-10%);
        transition:all 0.4s ease;
    }
  @media screen and (max-width:690px){
  display:none;
}
`


export const ButtonMobile = styled.button`
    transition: 0.8s all ease;

  padding: 15px 30px;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(223,79,180,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  justify-content:center;
  align-items:center;
  &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 10px rgba(0,0,0,0.8);
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
  background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(223,79,180,1) 0%, rgba(123,67,255,1) 100%);
  color: white;
  font-weight: 700;
  margin-top:16px;
   &:hover{
        /* background: linear-gradient(90deg, rgba(123,67,255,1)  0%, rgba(223,79,180,1) 100%); */
        box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
        transform: translatey(-10%);
        transition:all 0.4s ease;
    }
`





export const ButtonHolder = styled.div`
margin-top:80px;
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
margin-top:80px;
display:flex;
color:#ADAECD;
font-size:16px;
width:400px;
align-items:center;
column-gap:16px;
margin-left:auto;
margin-right:auto;
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

export const ButtonHolderStaff = styled.div`
margin-top:50px;
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
column-gap:16px;
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