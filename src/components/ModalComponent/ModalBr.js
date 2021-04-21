import React, {useRef,useState,useEffect,useCallback} from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import { ButtonCenter } from "../Button/ButtonElements";
import { easeCubic, easePolyOut } from "d3-ease";
import emailjs, { init } from 'emailjs-com';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


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
  width: 100%;
  justify-content: left;
  align-items: left;
  display:flex;
  flex-direction: column;
  padding:40px;
  `

  export const ContactLabel = styled.label`
  margin-top: 30px;
  margin-left:0px;
  display:flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  font-size: 12px;
  line-height:16px;
  font-weight: 600;
  color: #d2d2d4;
  `
  export const ContactInput= styled.input`
  padding-left:4%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:transparent;
  border:2px solid #ededed;
  border-radius:4px ;
  font-size: 14px;
  line-height:30px;
  font-weight: 600;
  color: #acaeb0;
  `
  export const MessageInput= styled.textarea`
  padding:4%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:transparent;
  border:2px solid #ededed;
  border-radius:4px ;
  font-size: 14px;
  line-height:22px;
  font-weight: 600;
  color: #acaeb0;
  margin-bottom:26px;
      @media screen and (max-width: 820px) {
       margin-bottom:24px;
      }
  
  `

const TitleForm = styled.h2`
  color:#4b4b4d;
  font-size:24px;
  width:250px;
  justify-content: center;
  align-items: center;
      @media screen and (max-width: 820px) {
    font-size:20px;
    justify-self:center;
    align-self:center;
    width:100%;
    }
  
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
    document.getElementById( "titlesent" ).innerHTML = "Obrigado! Em breve entraremos em contato."
    document.getElementById( "titlesent" ).style.fontSize = "20px";
    document.getElementById( "titlesent" ).style.color = "#6775ff";

  }

  function sendEmail ( e )
  {
    console.log( "mandando mail" );
    e.preventDefault();

    emailjs.sendForm( 'service_ahdvih9', 'template_lb4myvm', e.target, 'user_pdhfAhtDDgmhwxYsFtMst' )
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
      
                        <TitleForm id="titlesent">Comece sua jornada em espanhol hoje!</TitleForm>
                        <ContactLabel>NOME</ContactLabel>
                        <ContactInput type="text" name="user_name" />
                        <ContactLabel>EMAIL</ContactLabel>
                        <ContactInput type="email" name="user_email" id="email_input"/>
                        <ContactLabel>INTERESSE</ContactLabel>
                        <ContactInterest name="interest" id="c-form-profession">
                          <option value="">SELECIONE SEU INTERESSE</option>
                           <InterestOption value="Free one-on-one class">Aula Privada</InterestOption>
                           <InterestOption value="Two-Student class">Aula de Dois Alunos</InterestOption>
                          <InterestOption value="Chat Session">Aula de Chat</InterestOption>
                          <InterestOption value="Other">Outro</InterestOption>
        </ContactInterest>
        <ContactLabel>COMENTÁRIOS (OPCIONAL)</ContactLabel>
                        <MessageInput rows="2" type="comments" name="comments" />

        
        <ButtonCenter name="submit" type="submit" value="Submit" onClick={ showMessage }>ENVIAR</ButtonCenter>

      </ContactForm>

      
    </>
  )
    
}

export const ModalBr = ({ showModal, setShowModal }) => {
 
  const modalRef = useRef();
  
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "modal.jpg" }) {
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

  const animation = useSpring({
    config: {
      duration: 1000,
      easing: easePolyOut
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
        setShowModal( false );
    }
  };

     const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
    
    return (
        <>
        { showModal ? (

               <FixedWrapper>
                    <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                    <ModalWrapper showModal={ showModal }>
                  <ModalImg>
                      <Img fluid={ data.file.childImageSharp.fluid } alt="two friends having fun at their home" />
                    </ModalImg>
                    <ModalContent>
                      <ContactFormFunction></ContactFormFunction>
                      
                        </ModalContent>
                        <CloseModalButton
                            aria-label="Close modal"
                            onClick={ () => setShowModal( prev => !prev ) } />
                            </ModalWrapper>
                            </animated.div>
                    </Background>
            </FixedWrapper>
   
            ) : null }
        </>
    );
};

