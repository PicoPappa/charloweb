import React,{useState} from "react";
import styled from "styled-components"
import { Button,ButtonMobile } from "./ButtonElements";
import { Modal,Background } from "../ModalComponent/Modal"
import { ModalBr } from "../ModalComponent/ModalBr";

function ModalButtonMobileBr ()
{
const [ showModal, setShowModal ] = useState( false );

const openModal = () =>
{
  setShowModal( prev => !prev );
};

  return (
    <> 
    < ButtonMobile href="#pricing" >RESERVE SUA AULA DE GRAÇA</ButtonMobile>
    
    < ModalBr showModal={ showModal } setShowModal={ setShowModal } />
    </>
  );

}
export default ModalButtonMobileBr;
