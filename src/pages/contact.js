//import React from "react"
import Layout from "../component/LayoutPage"
import {navigate} from "gatsby"
import React, { useRef } from "react"


const typeProyect =[
  {option :"Tipo de Proyecto", value : 0},
  {option :"Pagina Web", value : 1},
  {option :"Infraestrutura de redes", value:2},
  {option :"Soporte Tecnico", value:3}
];


const Contact = () => {

  // constante para el formulario
  const formRef = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevenir la ejecucion normal y validar los campos

    //Importar SweetAlert solo cuando se necesita
    const { default: Swal } = await import("sweetalert2");

    //evaluo que todos los campos esten llenos y se cumplan reglas de html
    if (formRef.current.checkValidity()) { 
      Swal.fire({
        text: 'En breve nos comunicaremos contigo.',
        confirmButtonText: 'Gracias',
        timer: 1500
      });
      navigate("/");
    } else {
      formRef.current.reportValidity();
      Swal.fire({
        text: 'Campos pendientes.',
        icon: "warning",
        confirmButtonText: 'Gracias'
      });
    }
  }

  return (
    <Layout>
      
        <h2>Formulario de contacto</h2>
        <form ref={formRef} onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" >
          <div className="divForms"> 
            <label className='labelForm' htmlFor="nombre">Nombre</label>
            <input type='text' name="nombre" placeholder='Nombre' className="inputForm" step="1" autofocus required/>
          </div>
          <div className="divForms"> 
            <label className="labelForm" htmlFor="email">Email</label>
            <input type='email' name='email' placeholder='Email' className="inputForm" step="2" required/>
          </div>
          <div className="divForms"> 
            <label className="labelForm" htmlFor="telefono">Telefono</label>
            <input type='tel' name='telefono' placeholder='Telefono' className="inputForm" step="3" required/>
          </div>
          <div className="divForms"> 
            <label className="labelForm" htmlFor="tipoProyecto">Tipo de proyecto</label>
            <select name="tipoProyecto" className="selectForm" step="4" required>
              {typeProyect.map((option) => {
                return <option key={option.value} value={option.value}>{option.option}</option>
              })}
              </select>
              </div>
          <div className="divForms"> 
            <label className="labelForm" htmlFor="mensaje">Mensaje</label>
            <textarea name='mensaje' placeholder='Mensaje' className="textareaForm" step="5" required/>
          </div>
          <div className="divForms"> 
            <p>* Campos obligatorios</p>
          </div>

          <div className="divForms">
            <button className="btnForm"  type="submit" >Enviar</button> {/**/}
          </div>
        </form>
     
    </Layout>
  )
}

export default Contact
export const Head = () => <title>Contacto</title>