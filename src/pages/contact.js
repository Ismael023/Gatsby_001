<<<<<<< HEAD
//import React from "react"
import Layout from "../component/LayoutPage"
import {navigate} from "gatsby"
import React, { useRef } from "react"

=======
import React from "react"
import Layout from "../component/Layout"
>>>>>>> cc8935271edd715cc748716cbf72035558bc9ece

const typeProyect =[
  {option :"Tipo de Proyecto", value : 0},
  {option :"Pagina Web", value : 1},
  {option :"Infraestrutura de redes", value:2},
  {option :"Soporte Tecnico", value:3}
];  

<<<<<<< HEAD

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
=======
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
>>>>>>> cc8935271edd715cc748716cbf72035558bc9ece

  return (
<<<<<<< HEAD
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
     
=======
    <Layout pageTitle="Formulario de contacto"> 
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
          <label className="labelForm" htmlFor="tipoProyecto">Tipo de proyecto</label>
          <select name="tipoProyecto" className="selectForm">
            {typeProyect.map((option) => {
              return <option key={option.value} value={option.value}>{option.option}</option>
            })}
          </select>
        </div>
        <div className="divForms"> 
          <label className="labelForm" htmlFor="mensaje">Mensaje</label>
          <textarea name='mensaje' placeholder='Mensaje' className="textareaForm"/>
        </div>

        <div className="divForms">
          <button className="btnForm" onClick={pressBtnForm02}>Enviar</button> {/**/}
        </div>
      </form>     
>>>>>>> cc8935271edd715cc748716cbf72035558bc9ece
    </Layout>
  )
}

export default Contact
export const Head = () => <title>Contacto</title>