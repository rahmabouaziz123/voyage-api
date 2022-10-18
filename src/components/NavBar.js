import React, {  useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {

const [toggleMenu, setToggleMenu] = useState(false)
const [largeur, setLargeur] = useState(window.innerWidth)

const toggleNavSmallScrenn=()=>{
  setToggleMenu(!toggleMenu);
}

useEffect(() => {

  const changeWidth=()=>{
    setLargeur(window.innerWidth);
if(window.innerWidth>500){
  setToggleMenu(false);
}

  }
 
  window.addEventListener('resize',changeWidth)
 return ()=>{
  window.removeEventListener('resize',changeWidth)
 }
}, [])




  return (
    <nav >
      {(toggleMenu || largeur>500) &&(
        <ul className="liste">
            <Link to= "/"  className="items" > Home</Link>

          <Link to="/Aceuil"  className="items">  Aceuil</Link>
          <Link   to="/service"  className="items" > Service </Link>
          <Link to="/contact"  className="items" > Contact</Link>

          
       
       
        
      </ul>
      )}
      {/* <Button variant="primary"  onClick={toggleNavSmallScrenn} className="btnNav"  > BTN</Button> */}
      <button  onClick={toggleNavSmallScrenn} className="btnNav"> BTN</button>
    </nav>
  );
};
