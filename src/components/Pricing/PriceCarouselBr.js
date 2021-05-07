import React, { useState } from "react"
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import styled from "styled-components"
import "./styleCarousel.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { PricingzFluidContainer, TwoColumnsWrapPricing } from "../Features/FeatureElements"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import { ButtonCenter } from "../Button/ButtonElements"
import { MdClose } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai"
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

const CloseModalButton = styled( MdClose )`
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
  transition:0.8 all ease;

    padding-bottom: 46px;
  margin-right:0;
  margin-left:auto;
  box-shadow:0px 5px 10px rgba(0,0,0,0.6);
  margin-top:auto;
  border-radius:10px;
  display:${ ( { vanished } ) => ( vanished ? "none" : "flex" ) };
  /* left:${ ( { click } ) => ( click ? "0" : "-1000px" ) }; */


  background: linear-gradient(180deg,  rgb(56, 54, 81,1) 0%, rgba(34, 28, 43,1) 100%);
  @media screen and (max-width: 690px) {
  margin:auto;
  margin-top:32px;
  width:100%;
  }
`


export const FormHolder = styled.div`
  padding-top:20px;
      padding-right: 46px;
      padding-left: 46px;
        width: 90%;
        justify-content: center;
  align-items: left;
  display:flex;
  flex-direction: column;
  transition:0.8 all ease;
  margin-right:auto;
  margin-left:auto;
  margin-top:auto;
  border-radius:10px;
  @media screen and (max-width: 690px) {
  margin:auto;

  width:100%;
  }
  @media screen and (max-width: 390px) {
  padding-left:26px;
  padding-right:26px;
  }
  `

export const ContactLabel = styled.label`
  margin-top: 30px;
  margin-left:0px;
  display:flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  font-size: 10px;
  line-height:16px;
  font-weight: 400;
  color: #d2d2d4;
  
  `
export const ContactInput = styled.input`

    border-style:none;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align:left;
  padding-left:6%;
  background:white;

  font-size: 12px;
  line-height:30px;
    border-radius:4px;

  font-weight: 600;
  color: #312d44;
  ::placeholder{
    font-weight:300;
    font-style:italic;
  }
  `
export const MessageInput = styled.textarea`
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
  font-size:20px;
  width:250px;
margin:auto;

  text-align:center;
  justify-content: center;
  align-items: center;
  align-self:center;
  justify-self:center;
      @media screen and (max-width: 820px) {
    font-size:16px;
    justify-self:center;
    align-self:center;
    width:100%;
    }
  
  `
const SuccessWraper = styled.div`

margin:auto;
        display:none;
margin-bottom:32px;
      @media screen and (max-width: 690px) {
      margin-top:100px;
      }


/* left:${ ( { click } ) => ( click ? "0" : "-1000px" ) }; */
`

const IconSuccess = styled( AiFillCheckCircle )`

align-items: center;
color:#6775FF;
font-size:100px;
margin:auto;
margin-bottom:32px;
`

const SucessContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;


  justify-content: center;
  align-self:center;
  justify-self:center;
  margin:auto;
  border-radius:10px;
  @media screen and (max-width: 690px) {
  width:100%;
  }
`

export const TitleOffer = styled.h5`
  color:white;
  font-size:14px;
  font-weight:600;
  justify-self:center;
  text-align:center;
  margin:auto;
  `


export const ContactInterest = styled.select`
  border-style:none;
  padding-left:6%;
  padding-top:9px;
  padding-bottom:9px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  font-size: 12px;
  line-height:30px;
  font-weight: 600;
  background:transparent;
  color: white;
  border-radius:4px;
  border:1px solid #b2b2b2;
  ::placeholder{
font-weight:300;
    font-style:italic;
  }


  `



export const InterestOption = styled.option`
  margin-top: 30px;
  padding-left:auto;
  padding-right:auto;
  padding-top:9px;
  padding-bottom:9px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    text-align:center;
  
  font-size: 12px;
  line-height:30px;
  font-weight: 600;
  color: #46454f;

  `

export const InterestOptionDefault = styled.option`
  margin-top: 30px;
  padding-left:auto;
  padding-right:auto;
  padding-top:9px;
  padding-bottom:9px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    text-align:center;
  
  font-size: 12px;
  line-height:30px;
  font-weight: 300;
  color: #d2d2d4;

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

export const InputHolder = styled.div`
margin-top:36px;
font-size:14px;
color:#d2d2d4;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
column-gap:8px;
`

export const Terms = styled.p`
font-size:12px;
color:#d2d2d4;
font-weight:600;
`

export const OfferHolder = styled.div`
background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(66, 148, 255,1) 0%, rgba(123,67,255,1) 100%);
border-top-left-radius:10px;
border-top-right-radius:10px;
height:33px;
justify-content:center;
align-items:center;
`



export function ContactFormFunction ()
{

  const [ vanished, setVanished ] = React.useState( false );

  const [ click, setClick ] = React.useState( false );
  const [ disabled, setDisabled ] = React.useState( false );




  const handleCheckChange = ( event ) =>
  {

    setClick( event.target.checked );
    console.log( click + "vanished" + vanished );



  };

  const handleVanishChange = ( event ) =>
  {

    setVanished( true );
    console.log( "vanished" + vanished );



  };


  function showMessage ()
  {
    document.getElementById( "form-container" ).style.display = "none";
    document.getElementById( "sucess-container" ).style.display = "flex";
    if ( typeof window !== "undefined" )
    {
      if ( window.fbq != null )
      {
        window.fbq( 'track', 'Lead', { currency: "USD", value: 9.99 } );
      }
    }

  }


  function sendEmail ( e )
  {
    console.log( "mandando mail" );
    e.preventDefault();
    showMessage();

    emailjs.sendForm( 'service_119efii', 'template_lb4myvm', e.target, 'user_pdhfAhtDDgmhwxYsFtMst' )
      .then( ( result ) =>
      {
        console.log( result.text );

      }, ( error ) =>
      {
        console.log( error.text );
      } );
    e.target.reset();
  }
  const data = useStaticQuery( graphql`
    query {
      file(relativePath: { eq: "PrivateClass3.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <>
      <SuccessWraper id="sucess-container">

        <SucessContainer >
          <PricingzFluidContainer>
            <Img fluid={ data.file.childImageSharp.fluid } alt="" />
          </PricingzFluidContainer>
          <TitleForm id="titlesent">Parabens! Em breve te enviaremos um mail.</TitleForm>
        </SucessContainer>
      </SuccessWraper>



      <ContactForm onSubmit={ sendEmail } id="form-container" vanish={ vanished }>
        <OfferHolder>
          <TitleOffer>Oferta Limitada - 50% OFF</TitleOffer>
        </OfferHolder>
        <FormHolder>


          <ContactLabel>NOME</ContactLabel>
          <ContactInput type="text" name="user_name" placeholder="Escreva o seu nome aqui" />
          <ContactLabel>EMAIL</ContactLabel>
          <ContactInput type="email" name="user_email" placeholder="Escreva o seu email aqui" id="email_input" />
          <div>

          </div>
          <ContactLabel>PAÍS DE RESIDÊNCIA</ContactLabel>
          <ContactInterest name="interest" id="c-form-profession">
            <InterestOption value="Brasil">Brasil</InterestOption>
            <InterestOption value="Argentina">Argentina</InterestOption>


          </ContactInterest>
          {/* <ContactLabel>COMENTÁRIOS (OPCIONAL)</ContactLabel>
                        <MessageInput rows="2" type="comments" name="comments" /> */}
          <InputHolder>
            <input type="checkbox" id="checkboxid" click={ click } onClick={ handleCheckChange } />
            <Terms>Eu tenho máis de 18 anos e vou prender a minha camara nas aulas.</Terms>
          </InputHolder>

          <ButtonCenter name="submit" type="submit" value="Submit" click={ click }>SOLICITAR INFORMACÃO</ButtonCenter>
        </FormHolder>




      </ContactForm>


    </>
  )

}

