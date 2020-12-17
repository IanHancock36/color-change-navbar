import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <Navbar>
      <NavItem icon={<FaShoppingBag />} />
      <NavItem icon=" X " />
      <NavItem icon=" !! " />

      <NavItem icon="?!!">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}
function DropdownMenu() {
  const[activeMenu,setActiveMenu]= useState('main'); 
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
    
  }
 
 
 
 
 
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <span className="icon-right">{props.rightIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" style ={{height: menuHeight}}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter ={calcHeight}
      >
        <div className="menu">
          <DropdownItem> My Profile</DropdownItem>
          <DropdownItem leftIcon="**&*" rightIcon="%$%$" goToMenu="settings">
            {" "}
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon="**&*" goToMenu="main" />
          <DropdownItem> Settings</DropdownItem>
          <DropdownItem> Settings</DropdownItem>
          <DropdownItem> Settings</DropdownItem>
          <DropdownItem> Settings</DropdownItem>
          <DropdownItem> Settings</DropdownItem>
          <DropdownItem> Settings</DropdownItem>
          
        </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children} </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, SetOpen] = useState(false);
  return (
    <li>
      <a href="#" className="icon-button" onClick={() => SetOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
