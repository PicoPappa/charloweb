import React,{useState} from "react";
import { Button } from "./ButtonElements";
import { Modal } from "../ModalComponent/Modal"
import "./ButtonStyle.css"




function ModalButton ()
{
  const [ showModal, setShowModal ] = useState( false );

    const openModal = () =>
    {
      setShowModal( prev => !prev );
};

  return (
    <>
    < Modal showModal={ showModal } setShowModal={ setShowModal } />

    < Button onClick = { openModal}> Enroll Now</Button>

    </>
  );

}
export default ModalButton;
