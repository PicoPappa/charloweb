import styled from "styled-components"
import { IoMdSchool } from "react-icons/io"
import {GrFormClose} from "react-icons/gr"
import { FaBars, FaTimes } from "react-icons/fa"
import {Link} from "gatsby"



export const Nav = styled.nav`
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:0.5rem;
top:0;
z-index:5;
background: transparent;

@media screen and (max-width:960px){
    width:100%;
    margin-left:auto;
    margin-right:auto;
}

/* @media screen and (max-width:490px){
    margin-left:auto;
    margin-right:auto;
} */

@media screen and (max-width:840px){
    /* background:${( { click })=> ( click ? "#1E1D2E" : "transparent" )}; */
    transition: 0.8s all ease;
}
`

export const DarkBackground = styled.div`
display:none;
@media screen and (max-width:840px){
    pointer-events:none;
    z-index:3;
    display:flex;
    position:absolute;
    left:0;
    width:100vw;
    height:100vh;
    position:${( { click })=> ( click ? "fixed" : "absolute" )};

    background:${( { click })=> ( click ? "rgba(0,0,0,0.6)" : "transparent" )};
    transition: 0.8s all ease;
}
`


export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:4;
width:90%;
max-width:820px;
margin:auto;
`

export const NavLogo = styled( Link )`
color:white;
justify-self:flex-start;
text-decoration: none;
font-size:1.5rem;
display:flex;
align-items:center;
border-bottom:0px solid white;
width:70px;
height:30px;
margin-top:auto;
margin-bottom:auto;
@media screen and (max-width:690px){
display:none;
}

`

export const NavIcon = styled( IoMdSchool )`
margin-right:10px;
color:${( { click })=> ( click ? "rgba(255, 255, 255,0.6)" : "rgba(255, 255, 255,1)" )};
`

export const MenuIcon = styled( FaBars )`
color: rgb(255 255 255);
`

export const MobileIcon = styled.div`
display:none;
color:white;

@media screen and (max-width:840px){
    
    position:${( { click })=> ( click ? "fixed" : "absolute" )};
    color:white;
    z-index:10;
    display:block;

    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;

@media screen and (max-width:840px){
    z-index:9;
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:60%;
    height:100vh;
    right:0;
    position:fixed;
    top:${( { click } ) => ( click ? "0" : "-1000px" )};
    pointer-events:${( { click } ) => ( click ? "auto" : "none" )};
    opacity:1;
    transition:all 0.8s ease;
    background: rgb(75,78,165);
    box-shadow: -10px 0 10px rgba(0,0,0,0.4);
    background: linear-gradient(90deg, rgba(75,78,165,1) 0%, rgba(30,29,46,1) 100%);
}
`

export const NavLinks = styled( Link )`
color:white;
display:flex;
align-items:center;
text-align:center;
text-decoration:none;

font-size:0.8rem;
padding:0.5rem 1rem;
height:100%;


@media screen and (max-width:840px){
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;
    position: absolute;
    font-size:16px;
    &:hover{
        color:#F63C82;
        transition:all 0.3s ease;
    }
}
`

export const NavItem = styled.li`
height:80px;
text-align:center;
align-items:center;
@media screen and (max-width:840px){
    width:100%;
}
`



export const iconGraphic = styled( GrFormClose )`
color:white;
z-index:4;
`