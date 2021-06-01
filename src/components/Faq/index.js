import React,{useState} from "react";
import { Questions } from "./Questions";
import styled from "styled-components"
import { IconContext } from "react-icons"
import { FiPlus, FiMinus } from "react-icons/fi"
import { ButtonTwo } from "../Button/ButtonElements";
import ModalButtonBrWhiteTwo from "../Button/ButtonBr";

const AccordionSection = styled.div`
display:flex;
flex-direction:column;
position:relative;
width: 100%;
max-width: 700px;
justify-content: center;
align-items: left;
margin: auto;
margin-bottom: 16px;
padding-bottom:50px;
z-index: 1;
 @media screen and (max-width: 1390px) {
padding-bottom:20px;
}
  @media screen and (max-width: 1050px) {
    width:100%;
}



`

const AccordionContainer = styled.div`
    position:absolute;
    top:30%;

`

const Wrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    text-align:center;
    cursor:pointer;
    border-bottom:1px solid #48465c;
    padding-top: 10px;
    padding-bottom:10px;
`
const Dropdown = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    text-align:left;
    cursor:pointer;
    padding-top:10px;
    padding-bottom:26px;
`

const Answer = styled.p`
font-size:16px;
`

const QuestionText = styled.p`
font-size:18px;
font-weight:500;
`

const TitleFaq = styled.h2`
font-size: 16px;
font-weight: 600;
padding-bottom:26px;
`

export default function FaqAccordion()
{
    return(
           
            <AccordionSection>
            <ModalButtonBrWhiteTwo></ModalButtonBrWhiteTwo>
                {/* <TitleFaq>Visite nosso Instagram e aprenda coisas novas todos os dias!</TitleFaq> */}
                {/* <AccordionContainer>
                </AccordionContainer>  
                { Questions.map( (item,index) =>
                {
                    return (
                        <>
                                
                            <Wrap onClick={ () => toggle( index ) } key={ index }>
                                <p><b>{ item.q }</b></p>
                             <span>{clicked===index?<FiMinus/>:<FiPlus/>}</span>
                            </Wrap>
                            { clicked === index ? (
                               <Dropdown>
                                <Answer>{ item.a }</Answer>
                            </Dropdown> 
                            ):null}
                            
                        </>
                                
                    );
                    })} */}
                        
        </AccordionSection>
    )
    };
