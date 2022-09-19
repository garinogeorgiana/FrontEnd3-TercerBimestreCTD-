import React, { useEffect, useState } from 'react';

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    //funciona como componentDidMount
    /* console.log("fase de montaje") */
    const detectarScroll = () => setScrollY(window.pageYOffset)
    window.addEventListener("scroll", detectarScroll)
  })

  //este useEffect se ejecuta cada vez que la variable
  //dentro del segundo parametro cambie.
  useEffect(() => {
    /* console.log("moviendo scroll / fase de actualizacion") */
  }, [scrollY])

  //este useEffect se ejecuta cada vez que se desmonte el componente
  //dejando vacio el segundo parametro
  useEffect(() => {
    /* console.log("fase montaje") */

  }, [])

  //cuando el componente se desmonte, se ejecutara la arrow function
  useEffect(() => {
    return () => {
      /* console.log("fase desmontaje") */
    }
  })

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  )
}
