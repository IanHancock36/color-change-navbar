
import React from 'react'

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon= " 🤪 " />
        <NavItem icon= " 🤪 " />
        <NavItem icon= " 🤪 " />
        
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

return(
  <li>
    <a href='#' className= 'icon-button'> 
    {props.icon}
    </a>
  </li>

);
}

export default App;
