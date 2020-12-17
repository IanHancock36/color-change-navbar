
import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon= {<FaShoppingBag/>}/>
        <NavItem icon= " X " />
        <NavItem icon= " !! " />
        
        <NavItem icon ="?!!">
          <p>Hello World!</p>
        </NavItem>
        
      </Navbar>
    </div>
  );
}

function Navbar(props){
  return(
    <nav className ="navbar">
      <ul className="navbar-nav">{props.children} </ul>

    </nav>
  );
}


function NavItem(props){
const [open, SetOpen] =useState(false);
return(
  <li>
    <a href='#' className= 'icon-button' onClick={()=> SetOpen(!open)}> 
    {props.icon}
    </a>

    {open && props.children }
  </li>

);
}

export default App;
