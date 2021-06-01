import React,{useState} from "react";
import { ArrowButton, ButtonIconGrid, ButtonTwo, ButtonWhite, InstagramIcon, TextButton } from "./ButtonElements";
import { Modal } from "../ModalComponent/Modal"
import "./ButtonStyle.css"
import { ModalBr } from "../ModalComponent/ModalBr";
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"




function ModalButtonBrWhiteTwo (){
 const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "igicon3.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed (width:28, height:28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      < ButtonTwo href="https://www.instagram.com/charloespanhol/">
        <Img fixed={ data.file.childImageSharp.fixed } alt="" />
        <TextButton>Faça uma consulta</TextButton>
        <ArrowButton></ArrowButton>
      </ButtonTwo>
    </>
  );

}
export default ModalButtonBrWhiteTwo;
