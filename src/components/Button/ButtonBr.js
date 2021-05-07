import React,{useState} from "react";
import { Button } from "./ButtonElements";
import { Modal } from "../ModalComponent/Modal"
import "./ButtonStyle.css"
import { ModalBr } from "../ModalComponent/ModalBr";




function ModalButtonBr ()
{
  const [ showModal, setShowModal ] = useState( false );

    const openModal = () =>
    {
      setShowModal( prev => !prev );
};

  return (
    <>
    < ModalBr showModal={ showModal } setShowModal={ setShowModal } />

    < Button  href="#pricing">EXPERIMENTE UMA AULA</Button>

    </>
  );

}
export default ModalButtonBr;
