import React,{useState} from "react";
import { Questions } from "./Questions";
import styled from "styled-components"
import { IconContext } from "react-icons"
import { FiPlus, FiMinus } from "react-icons/fi"

const AccordionSection = styled.div`
display:flex;
flex-direction:column;
position:relative;
width: 100%;
max-width: 1000px;
justify-content: center;
align-items: left;
margin: auto;
padding-top:140px;
padding-bottom:140px;

  @media screen and (max-width: 1050px) {
    width:90%;
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
padding-bottom:26px;
`

const FaqAccordion = () =>
{
    const [ clicked, setClicked ] = useState( false )
    const toggle = index =>
    {
        if ( clicked === index )
        {
            //if clicked question is active, close it
            return setClicked(null)
        }

        setClicked(index)
    }
    return (
        <IconContext.Provider value={ { color: "#adaecd", size: "25px" } }>
            
            <AccordionSection>
                
                <TitleFaq>F.A.Q.</TitleFaq>
                <AccordionContainer>
                </AccordionContainer>  
                { Questions.map( (item,index) =>
                {
                    return (
                        <>
                                
                            <Wrap onClick={ () => toggle( index ) } key={ index }>
                                <QuestionText>{ item.q }</QuestionText>
                             <span>{clicked===index?<FiMinus/>:<FiPlus/>}</span>
                            </Wrap>
                            { clicked === index ? (
                               <Dropdown>
                                <Answer>{ item.a }</Answer>
                            </Dropdown> 
                            ):null}
                            
                        </>
                                
                    );
                    })}
                        
        </AccordionSection>
        </IconContext.Provider> ); 
    };

export default FaqAccordion;