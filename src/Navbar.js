import { useState, useEffect } from "react";
import "./css/style.css"
import "./css/navbar.css";


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
      <div className="container"> 
      <div className="nav-second">
        <div>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
          </button>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
            <li> Item 1 </li>
            <li> Item 2 </li>
            <li> Item 3 </li>
            <li> Item 4 </li>
          </ul>
        </div>
      </div>
      </div>
    );
  };
  
  export default Navbar;
  




