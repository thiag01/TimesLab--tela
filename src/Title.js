import { useState, useEffect } from "react";
import "./css/style.css"
import "./css/title.css";

const Title = () => {
    return(
        <div className="title-product">
        <h2 className="title"> TimesLab Informa </h2>
        <p className="title-sub">
          {" "}
          it is a long established fact that a reader will be destracted by the
          readable{" "}
        </p>
      </div>
    )
}

export default Title;