import React from "react"; 
import {NavLink} from "react-router-dom"; 

class Header extends React.Component {
    render() {
        return (
            <header>
            <div class = "menu">
                <NavLink to ="/" exact activeClassName = "active"><img src = "../images/logga.gif" class = "NSFK" alt = "NSFK"/></NavLink>
                <NavLink to ="/Klubbvatten" activeClassName = "active">Klubbvatten</NavLink>
                <NavLink to ="/Tavling" activeClassName = "active">Tävling</NavLink>
                <NavLink to ="/Shop" activeClassName = "active">Shop</NavLink>
                <NavLink to ="/Fiskekort" activeClassName = "active"><button class = "fiskekort">Köp&nbsp;fiskekort</button></NavLink>
                <NavLink to ="" activeClassName = "active">Om&nbsp;oss</NavLink>
                <NavLink to ="/Blimedlem" activeClassName = "active">Bli&nbsp;medlem</NavLink>
                <NavLink to ="/Kundkorg" activeClassName = "active"><img src = "../images/checkout.png" class = "checkout" alt = "checkout"/></NavLink>           
            </div>
        <div class = "mobileMenu">
            <a href="javascript:void(0);" class="icon" onclick="mobileMenu()"><img src = "../images/hamburger2.png" class = "hamburger" alt = "hamMenu"/></a>
            <a class = "fiskekortA"><button class = "fiskekort">Köp&nbsp;fiskekort</button></a>
            <a>
                <img src = "../images/logga.gif" class = "NSFK" alt = "NSFK"/>
            </a>
        
        </div>
        </header>
        )
    }
}

export default Header; 