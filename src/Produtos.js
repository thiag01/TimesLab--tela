import { useState, useEffect } from "react";
import "./css/style.css"
import "./css/produtos.css";

const Produtos = (props) => {
    return(
        <div className="produto-thumb">
        <img className="produto-img" src={props.imagem} alt="" />
        <div className="produto-info">
          <h3 className="produto-title"> {props.nome} </h3>
          <p className="produto-comissao">{props.commission}</p>
        </div>
      </div>
    )
}

export default Produtos;