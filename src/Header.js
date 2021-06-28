import { useState, useEffect } from "react";
import "./css/style.css"
import "./css/header.css";

const Header = () => {
    return(
        <nav>
        <div className="container" style={{ justifyContent: "space-between" }}>
          <a href="" className="header-logo">
            {" "}
            TIMESLAB{" "}
          </a>
          <form action="/">
            <input
              type="search"
              className="header-buscar"
              placeholder="Buscar..."
            />
            <input type="submit" value="&#x1F50E;&#xFE0E;" className="header-button" />
          </form>
          <a href="" className="header-tel">
            <i class="fab fa-whatsapp"></i> 0000-0000
          </a>
          <div className="header-user">
            <a href=""> :) Olá, <span style={{color: "#1bb0ce"}}>  Visitante </span> </a>
          </div>
          <div className="header-cart">
            <a href=""> Minha Conta </a>
          </div>
        </div>
      </nav>
    )
}

export default Header;