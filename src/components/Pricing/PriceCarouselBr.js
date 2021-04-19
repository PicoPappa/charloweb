import React, { useState } from "react"
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import styled from "styled-components"
import "./styleCarousel.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { TwoColumnsWrapPricing } from "../Features/FeatureElements"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import { ButtonCenter } from "../Button/ButtonElements"
import { MdClose } from "react-icons/md";
import emailjs, { init } from 'emailjs-com';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'


export const LeftIcon = styled( IoIosArrowDropleftCircle )`
color:white;
opacity:0.3;
font-size:26px;
align-self:left;
justify-self:left;

`

export const RightIcon = styled( IoIosArrowDroprightCircle )`
color:white;
opacity:0.3;
font-size:26px;
align-self:right;
justify-self:right;
`

export const IconContainers = styled.div`
display:none;
 @media screen and (max-width: 690px) {
position:relative;
width: 92vw;
height:200px;
  justify-content: center;
  align-items: center;
  display: grid;
  column-gap:85%;
  grid-template-columns: repeat(2, 1fr);
 }
`
 export const FixedWrapper = styled.div`
  position:fixed;
  width:100vw;

  justify-self:center;
  justify-content:center;
  align-items: center;
  z-index:4;
  left:0;
  top:0;
` 

const Background = styled.div`

  position:relative;
  width: 100vw;
  height:100vh;
  background: rgba(51, 51, 51, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index:5;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
    z-index:6;

    @media screen and (max-width: 820px) {
  width:80vw;
  height:fit-content;
  display:flex;
  flex-direction:column;
  
  }
`;

const ModalImg = styled.div`
  width: 100%;
  height: 600px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: white;
  @media screen and (max-width: 820px) {
  display:none;
  }

`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
    @media screen and (max-width: 820px) {
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px;
    }
`;

export const ContactForm = styled.form`
  width: 90%;
  justify-content: center;
  align-items: left;
  display:flex;
  flex-direction: column;
  padding-top: 22px;
    padding-right: 46px;
    padding-bottom: 46px;
    padding-left: 46px;
  margin-right:0;
  margin-left:auto;
  box-shadow:0px 5px 10px rgba(0,0,0,0.6);
  margin-top:auto;
  border-radius:10px;
  background: linear-gradient(180deg,  rgb(56, 54, 81,1) 0%, rgba(34, 28, 43,1) 100%);
  @media screen and (max-width: 690px) {
  margin:auto;
  margin-top:32px;
  width:100%;
  }

  `

  export const ContactLabel = styled.label`
  margin-top: 30px;
  margin-left:0px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  line-height:16px;
  font-weight: 600;
  color: #d2d2d4;
  
  `
export const ContactInput = styled.input`

    border-style:none;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  background:transparent;
  border-bottom:1px solid #b2b2b2;
  font-size: 14px;
  line-height:30px;
  font-weight: 600;
  color: white;
  ::placeholder{
    font-weight:300;
    font-style:italic;
  }
  `
  export const MessageInput= styled.textarea`
  padding:4%;
  display:flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:transparent;
  border-bottom:1px solid #b2b2b2;
  border-radius:4px ;
  font-size: 14px;
  line-height:22px;
  font-weight: 600;
  color: #acaeb0;
  margin-bottom:26px;
  ::placeholder{
    font-weight:300;
    font-style:italic;
  }
      @media screen and (max-width: 820px) {
       margin-bottom:24px;
      }
  
  `

const TitleForm = styled.h2`
  color:white;
  font-size:24px;
  width:200px;
  margin-bottom:16px;
  text-align:center;
  justify-content: center;
  align-items: center;
  align-self:center;
  justify-self:center;
      @media screen and (max-width: 820px) {
    font-size:20px;
    justify-self:center;
    align-self:center;
    width:100%;
    }
  
  `
const OfferContainer = styled.div`
margin-bottom:32px;

`

const TitleOffer = styled.h6`
  color:#3859ff;
  justify-self:center;
  text-align:center;
  `


  export const ContactInterest = styled.select`
  padding-left:4%;
  padding-top:9px;
  padding-bottom:9px;
  display:flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  font-size: 12px;
  line-height:30px;
  font-weight: 600;
  color: #acaeb0;
  border:2px solid #ededed;
  border-radius:4px ;
  `

  export const InterestOption = styled.option`
  margin-top: 30px;
  padding-left:4%;
  padding-top:9px;
  padding-bottom:9px;
  display:flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  font-size: 12px;
  line-height:30px;
  font-weight: 600;
  color: #d2d2d4;
  border:2px solid #ededed;
  border-radius:4px ;
  `



export const EmailSent = styled.div`
width:80%;
max-width:300px;
justify-content:center;
background:white;
align-items:center;
display:none;
`

export const SentText = styled.p`
font-size:16px;
color:#141414;
`



export function ContactFormFunction ()
{
  function showMessage() {
    document.getElementById( "titlesent" ).innerHTML = "Parabéns! Em breve enviaremos um e-mail"
    document.getElementById( "titlesent" ).style.width = "300px";

  }
  

const Completionist = () => <span>You are good to go!</span>;

  function sendEmail ( e )
  {
    console.log( "mandando mail" );
    e.preventDefault();

    emailjs.sendForm( 'service_n84kzu1', 'template_lb4myvm', e.target, 'user_pdhfAhtDDgmhwxYsFtMst' )
      .then( ( result ) =>
      {
        console.log( result.text );
      }, ( error ) =>
      {
        console.log( error.text );
      } );
    e.target.reset();
  }
  return (
    <>
      <ContactForm onSubmit={ sendEmail }>
        <OfferContainer>

          
          </OfferContainer>
                        <TitleForm id="titlesent">Reserve a sua aula gratuita!</TitleForm>
                        <ContactLabel>NOME</ContactLabel>
                        <ContactInput type="text" name="user_name" placeholder="
Escreva o seu nome aqui"/>
                        <ContactLabel>EMAIL</ContactLabel>
        <ContactInput type="email" name="user_email" id="email_input" placeholder="
Escreva o seu email aqui" />
        <div>

    </div>
                        {/* <ContactLabel>INTERESSE</ContactLabel>
                        <ContactInterest name="interest" id="c-form-profession">
                          <option value="">SELECIONE SEU INTERESSE</option>
                           <InterestOption value="Free one-on-one class">Aula Privada</InterestOption>
                           <InterestOption value="Two-Student class">Aula de Dois Alunos</InterestOption>
                          <InterestOption value="Chat Session">Aula de Chat</InterestOption>
                          <InterestOption value="Other">Outro</InterestOption>
        </ContactInterest> */}
        {/* <ContactLabel>COMENTÁRIOS (OPCIONAL)</ContactLabel>
                        <MessageInput rows="2" type="comments" name="comments" /> */}

        
        <ButtonCenter name="submit" type="submit" value="Submit" onClick={ showMessage }>ENVIAR</ButtonCenter>

      </ContactForm>

      
    </>
  )
    
}

export function PricingCarouselBr ()
{
  

  
    const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "PrivateClass2.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    

      two: file(relativePath: { eq: "DuoClass.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }



  three: file(relativePath: { eq: "Headset.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <>
      <ContactFormFunction></ContactFormFunction>
      <div class="container">
        
     <IconContainers>
            <LeftIcon></LeftIcon>
            <RightIcon></RightIcon>
          </IconContainers>
    <input type="radio" name="slider" id="item-1" defaultChecked/>
    <input type="radio" name="slider" id="item-2"/>
    <input type="radio" name="slider" id="item-3"/>
        <div class="cards">
         
          <label class="card" for="item-1" id="song-1">
            <div class="bg1" >
              <TwoColumnsWrapPricing>
                
                <div class="textPlan1">
                  <h2>Aula Particular</h2>
                  <p>Aprenda o máximo em uma
                  <b> aula individual ao vivo </b>
                  com foco nas suas necessidades.</p>
                

                  <div class="priceContainer">
                    <h4>R$55/hr</h4>
                    </div>
                </div>
                <div class="imgc" >
                  <Img fluid={ data.one.childImageSharp.fluid } alt="Girl drinking tea with thumb up" />
                </div>
                </TwoColumnsWrapPricing>
            </div>
          </label>
          
          <label class="card" for="item-2" id="song-2">
            <div class="bg2" >
              <TwoColumnsWrapPricing>
                
                <div class="textPlan2">
                  <h2>Aula de dois alunos</h2>
                  <p>Aprenda com um parceiro
                  <b> em uma classe de dois alunos </b>
                  e cresça juntos.</p>
                  <div class="priceContainer">
                    <h4>R$39/hr</h4>
                    </div>
                  </div>
                <div class="imgc2" >
                  <Img fluid={ data.two.childImageSharp.fluid } alt="Two students smiling" />
                </div>
                </TwoColumnsWrapPricing>
            </div>
          </label>
          
          <label class="card" for="item-3" id="song-3">
            <div class="bg3" >
              <TwoColumnsWrapPricing>
                
                <div class="textPlan2">
                  <h2>Aula de chat</h2>
                  <p>Pratique suas habilidades de conversação
                   <b> em uma aula de chat </b> 
                   com um falante nativo da Argentina.</p>
                  <div class="priceContainer">
                    <h4>R$28</h4>
                    </div>
                </div>
                <div class="imgc3" >
                  <Img fluid={ data.three.childImageSharp.fluid } alt="headset" />
                </div>
                </TwoColumnsWrapPricing>
            </div>
    </label>
  </div>
      </div>
      
    </>
)
}