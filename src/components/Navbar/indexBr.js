import React, {useState, useEffect} from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { MenuIcon, MobileIcon, Nav, NavbarContainer, NavIcon, NavLogo, NavMenu, NavItem, NavLinks, DarkBackground } from "./NavbarElements"

const Navbar = () =>{
const [ click, setClick ] = useState( false )
    const [ scroll, setScroll ] = useState( false )
    const handleClick=()=>setClick(!click)

    const changeNav = () =>
    {
        if ( window.scrollY >= 80 )
        {
            setScroll(true)
        } else
        {
            setScroll(false)
        }
    }

    useEffect( () =>
    {
        changeNav()
        window.addEventListener("scroll",changeNav)
}, [])

    return (
        <>

            <IconContext.Provider value={ { color: "##fff" } }>
                
                <Nav active={ scroll } click={ click }>
                    <NavbarContainer>
                                    <DarkBackground click={click}></DarkBackground>

                        <NavLogo>
                            
                            <h4 className="charloStyle">Charlo</h4>
                            </NavLogo>
                            <MobileIcon onClick={ handleClick } click={click}>
                                {click?<FaTimes/>:<MenuIcon/>}
                            </MobileIcon>
                            <NavMenu onClick={ handleClick } click={ click }>
                                <NavItem>
                                    <NavLinks href="#features">Features</NavLinks>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLinks href="#journey">Experience</NavLinks>
                                </NavItem> */}
                                <NavItem>
                                    <NavLinks href="#pricing">Pricing</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks href="#about-us">About us</NavLinks>
                            </NavItem>
                            
                            </NavMenu>
                        
                    </NavbarContainer>
                </Nav>
                
            </IconContext.Provider>    
        </>
    )
}

export default Navbar