import React from "react"
import Layout from "../component/LayoutPage"
//import Swal from "sweetalert2" //se elimina ya que causa error al compilar el sitio

const typeProyect =[
  {option : "Tipo de Proyecto", value : ""},
  {option : "Pagina Web", value : "1"},
  {option:"Infraestrutura de redes", value:"2"},
  {option:"Soporte Tecnico", value:"3"}
];

  /*
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
  */

const Contact = () => {
  return (
    <Layout>
      
        <h2>Formulario de contacto</h2>
        <form>
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
            <label className="labelForm" htmlFor="tipoProyecto">Tipo de proyecto</label>
            <select name="tipoProyecto" className="selectForm">
              {typeProyect.map((option) => {
                return <option  value={option.value}>{option.option}</option>
              })}
              </select>
              </div>
          <div className="divForms"> 
            <label className="labelForm" htmlFor="mensaje">Mensaje</label>
            <textarea name='mensaje' placeholder='Mensaje' className="textareaForm"/>
          </div>

          <div className="divForms">
            <button className="btnForm" >Enviar</button> {/*onClick={pressBtnForm02}*/}
          </div>
        </form>
     
    </Layout>
  )
}

export default Contact

export const Head = () => <title>Contacto</title>