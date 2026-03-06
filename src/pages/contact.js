import React from "react"
import Layout from "../component/LayoutPage"

const typeProyect =[
  {option : "Tipo de Proyecto", value : ""},
  {option : "Pagina Web", value : "1"},
  {option:"Infraestrutura de redes", value:"2"},
  {option:"Soporte Tecnico", value:"3"}
];


const Contact = () => {
  return (
    <Layout>
     
        <h2>Formulario de contacto</h2>
        <p>Nos ponemos en contacto</p>
        <form>
          <div className="divForms"> 
            <label className='labelForm' htmlfor="nombre">Nombre</label>
            <input type='text' name="nombre" id="nombre" placeholder='Nombre' className="inputForm"/>
          </div>
          <div className="divForms"> 
            <label className="labelForm" htmlfor="email">Email</label>
            <input type='email' name='email' placeholder='Email' className="inputForm"/>
          </div>
          <div className="divForms"> 
            <label className="labelForm" htmlfor="telefono">Telefono</label>
            <input type='tel' name='telefono' placeholder='Telefono' className="inputForm"/>
          </div>
          <div className="divForms"> 
            <label className="labelForm" htmlfor="tipoProyecto">Tipo de proyecto</label>
            <select name="tipoProyecto" className="selectForm">
              {typeProyect.map((option) => {
                return <option  value={option.value}>{option.option}</option>
              })}
              </select>
              </div>
          <div className="divForms"> 
            <label className="labelForm" htmlfor="mensaje">Mensaje</label>
            <textarea name='mensaje' placeholder='Mensaje' className="textareaForm"/>
          </div>

          <div className="divForms">
            <button className="btnForm">Enviar</button>
          </div>

        </form>
     
    </Layout>
  )
}

export default Contact

export const Head = () => <title>Contacto</title>