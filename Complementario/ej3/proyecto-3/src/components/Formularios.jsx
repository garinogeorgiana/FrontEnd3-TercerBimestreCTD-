import React, { useState } from 'react';

/* export default function Fromularios() {  
  const [nombre, setNombre] = useState(""); //actualizar hook con valor del input target.
  const [sabor, setSabor] = useState(""); //guardamos el valor del input radio.
  const [lenguaje, setLenguaje] = useState(""); //guardamos el valor del select
  const [terminos, setTerminos] = useState(false); //guardamos el valor del checkbox

  const handleSubmit = e => {
    e.preventDefault();
    alert("El formulario se ha enviado")
  }

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id='nombre'
          name='nombre'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <p>Elige tu Sabor JS Favorito:</p>
        <input 
          type="radio" 
          id='vanilla' 
          name='sabor' 
          value="vanilla" 
          onChange={e => setSabor(e.target.value)} />
        <label htmlFor="vanilla">vanilla</label>
        <br />
        <input 
          type="radio" 
          id='react' 
          name='sabor' 
          value="react" 
          onChange={e => setSabor(e.target.value)} />
        <label htmlFor="react">react</label>
        <br />
        <input 
          type="radio" 
          id='angular' 
          name='sabor' 
          value="angular" 
          onChange={e => setSabor(e.target.value)} />
        <label htmlFor="angular">angular</label>
        <br />
        <input 
          type="radio" 
          id='vue' 
          name='sabor' 
          value="vue" 
          onChange={e => setSabor(e.target.value)} />
        <label htmlFor="vue">vue</label>
        <br />
        <input 
          type="radio" 
          id='svelte' 
          name='sabor' 
          value="svelte" 
          onChange={e => setSabor(e.target.value)} />
        <label htmlFor="svelte">svelte</label>

        <br />
        <br />

        <p>Elige tu lenguaje de programacion favorito</p>
        <select name="lenguaje" 
          id="lenguaje" 
          onChange={e => setLenguaje(e.target.value)} 
          defaultValue=""
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>

        <br />
        <br />

        <input type="checkbox" name="terminos" id="terminos" onChange={e => setTerminos(e.target.checked)}/>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>

        <br />
        <input type="submit" value="Enviar" />

      </form>
    </>
  )

  
} */

export default function Fromularios() {  
  const [form, setForm] = useState({}); //usamos un solo state para manejar todos los eventos
  /* Con este metodo podemos ahorrar muchas lineas de codigo repetitivo en formularios extensos*/

  const handleSubmit = e => {
    e.preventDefault();
    alert("El formulario se ha enviado")
  }

  const handleChange = e => {
    setForm({
      ...form, //lo que ya tenia previamente el form
      [e.target.name]:e.target.value //usamos desestructuracion para asignarle valor al nombre relacionado con el evento.
    })
  }

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.checked
    })
  }
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id='nombre'
          name='nombre'
          value={form.nombre}
          onChange={handleChange}
        />

        <p>Elige tu Sabor JS Favorito:</p>
        <input 
          type="radio" 
          id='vanilla' 
          name='sabor' 
          value="vanilla" 
          onChange={handleChange} />
        <label htmlFor="vanilla">vanilla</label>
        <br />
        <input 
          type="radio" 
          id='react' 
          name='sabor' 
          value="react" 
          onChange={handleChange} />
        <label htmlFor="react">react</label>
        <br />
        <input 
          type="radio" 
          id='angular' 
          name='sabor' 
          value="angular" 
          onChange={handleChange} />
        <label htmlFor="angular">angular</label>
        <br />
        <input 
          type="radio" 
          id='vue' 
          name='sabor' 
          value="vue" 
          onChange={handleChange} />
        <label htmlFor="vue">vue</label>
        <br />
        <input 
          type="radio" 
          id='svelte' 
          name='sabor' 
          value="svelte" 
          onChange={handleChange} />
        <label htmlFor="svelte">svelte</label>

        <br />
        <br />

        <p>Elige tu lenguaje de programacion favorito</p>
        <select name="lenguaje" 
          id="lenguaje" 
          onChange={handleChange} 
          defaultValue=""
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>

        <br />
        <br />

        <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked}/>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>

        <br />
        <input type="submit" value="Enviar" />

      </form>
    </>
  )
}