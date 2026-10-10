import React from "react";
import { Link } from "gatsby";

import  "./styles.css";
import  "../../styles/colors.css";

const links = [  
  {name: 'Home', href: '/', title:'Pagina principal', id:1},
  {name: 'Servicios', href: '/servicios/', title:'Servicios', id:2 },
  {name: 'Sobre mí', href: '/about', title:'Sobre mí', id:3 },
  {/*name: 'Proyectos', href: '/portfolio', title:'Portafolio', id:4*/ },
  {name: 'Contacto', href: '/contact', title:'Contacto', id:5 }
];

export default function NavBar() {
  return(
    <nav className="navbar">
      <div className="menu">       
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
