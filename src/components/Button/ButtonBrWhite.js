import React,{useState} from "react";
import { ButtonWhite } from "./ButtonElements";
import { Modal } from "../ModalComponent/Modal"
import "./ButtonStyle.css"
import { ModalBr } from "../ModalComponent/ModalBr";




function ModalButtonBrWhite ()
{
  const [ showModal, setShowModal ] = useState( false );

    const openModal = () =>
    {
      setShowModal( prev => !prev );
};

  return (
    <>
    < ModalBr showModal={ showModal } setShowModal={ setShowModal } />

    < ButtonWhite  href="#pricing">EXPERIMENTE UMA AULA</ButtonWhite>

    </>
  );

}
export default ModalButtonBrWhite;
