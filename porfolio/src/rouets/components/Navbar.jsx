import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars} from "react-icons/fa";
import { FaTimes }  from "react-icons/fa"
import { useState } from "react";
 

const Navbar = () => {
    const [click,setclick] = useState(false);
    const handclick = () => setclick(!click); 
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handclick}>
        {click ? (<FaTimes  size={20} style={{color : "#fff"}}/> ) : (<FaBars size={20} style={{color : "#fff"}}/>)}
       
        
       
      </div>
    </div>
  );
};

export default Navbar;
