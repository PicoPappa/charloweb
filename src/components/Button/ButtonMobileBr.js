import React,{useState} from "react";
import styled from "styled-components"
import { Button,ButtonMobile, InstagramIcon } from "./ButtonElements";
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
      <InstagramIcon></InstagramIcon>
    < ButtonMobile href="#pricing" >EXPERIMENTE UMA AULA</ButtonMobile>
    
    < ModalBr showModal={ showModal } setShowModal={ setShowModal } />
    </>
  );

}
export default ModalButtonMobileBr;
