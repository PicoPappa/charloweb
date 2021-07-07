import React,{useState} from "react";
import styled from "styled-components"
import { Button,ButtonMobile } from "./ButtonElements";
import { Modal,Background } from "../ModalComponent/Modal"

function ModalButtonMobile ()
{
const [ showModal, setShowModal ] = useState( false );

const openModal = () =>
{
  setShowModal( prev => !prev );
};

  return (
    <> 
    < ButtonMobile onClick = { openModal } >EXPERIMENTE UMA AULA</ButtonMobile>
    
    < Modal showModal={ showModal } setShowModal={ setShowModal } />
    </>
  );

}
export default ModalButtonMobile;
