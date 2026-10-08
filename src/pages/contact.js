import React, {useState, useEffect} from "react"
import Layout from "../component/Layout"
import { graphql } from "gatsby";

const pressBtnForm02 = async (e) => { 
  e.preventDefault(); // <--- Esto evita que la página se recargue    

  // 2. Importamos SweetAlert solo cuando se necesita
  const { default: Swal } = await import("sweetalert2");
  Swal.fire({
    text: 'En breve nos comunicaremos contigo.',
    icon: 'success',
    confirmButtonText: 'Gracias',
    timer: 1500
  });
}

const Contact = ({data, location}) => {
  console.log(data)
  const listServices = data.allMarkdownRemark.nodes

   // Estado para el select
  const [tipoServicio, setTipoServicio] = useState("")

  // Leer el query param al montar
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const servicio = params.get("servicio")
    if (servicio) {
      setTipoServicio(servicio)
    }
  }, [location.search])


  return (
    <Layout pageTitle="Si buscas resultados, estás en el lugar correcto"> 
      <form name="contacto" method="POST" date-netlify="true">
        <div className="divForms"> 
          <label className='labelForm' htmlFor="nombre">Nombre</label>
          <input type='text' name="nombre" id="nombre" placeholder='Nombre' className="inputForm"/>
        </div>
        <div className="divForms"> 
          <label className="labelForm" htmlFor="email">Email</label>
          <input type='email' name='email' placeholder='Email' className="inputForm"/>
        </div>
        <div className="divForms"> 
          <label className="labelForm" htmlFor="telefono">Telefono</label>
          <input type='tel' name='telefono' placeholder='Telefono' className="inputForm"/>
        </div>

         <div className="divForms"> 
          <label className="labelForm" htmlFor="tipoServicio">Tipo de Servicio</label>
          <select name="tipoServicio" className="selectForm" value={tipoServicio}
            onChange={(e) => setTipoServicio(e.target.value)}
          >
            <option value="" >Tipo de Servicio </option>
            {listServices.map((option) => (
              <option
                key={option.frontmatter.id_serv}
                value={option.frontmatter.slug}
              >
                {option.frontmatter.title}
            
            </option>
            ))}
          </select>
        </div>

        <div className="divForms"> 
          <label className="labelForm" htmlFor="mensaje">Mensaje</label>
          <textarea name='mensaje' className="textareaForm" placeholder='Cuentame que te gustaria resolver o mejorar'/>
        </div>

        <div className="divForms">
          <button className="btnForm" onClick={pressBtnForm02}>Enviar</button>
        </div>
      </form>     
    </Layout>
  )
}

export const query = graphql`
  query listServices {
    allMarkdownRemark {
      nodes {
        frontmatter {
          id_serv
          title
          slug
        }
      }
    }
  }
`

export default Contact
export const Head = () => <title>Contacto</title>