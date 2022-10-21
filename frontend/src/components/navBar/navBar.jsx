import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/Logo-smart-games.png"
import "./styleNavBar.scss"

const NavbarComponent = () => {

    return (
        <header>
            <nav>
                <a href="http://localhost:3000/">
                    <img src={logo} alt="Logo-smart-games"></img>
                </a>
            </nav>

            <div className='nav-menu'>
                <NavLink className="navlink-jogos"to='/'>Jogos</NavLink>
            </div>
        </header>
    );
}

export default NavbarComponent;