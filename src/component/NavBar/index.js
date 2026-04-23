import React from "react";
import { Link } from "gatsby";

import  "./styles.css";
import  "../../styles/colors.css";

const links = [  
  {name: 'Home', href: '/', title:'Pagina principal', id:1},
  {name: 'Portafolio', href: '/portfolio', title:'Portafolio', id:2 },
  {name: 'Contacto', href: '/contact', title:'Contacto', id:3 }
];

export default function NavBar() {
  return(
    <nav className="navbar">
      <div className="menu">
        {/* menu en pantalla grande */}        
        {links.map( (link) => { 
          return (
            <Link 
              key={link.id}
              to={link.href}
              className="link-menu"  
              title={link.title}
            >
              {link.name}
            </Link>
          )
        } ) }
      </div>
    </nav>
  )
}
