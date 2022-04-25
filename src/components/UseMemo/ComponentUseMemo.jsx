import React from 'react'

const ComponentUseMemo = ({lista}) => {
  
  const calculo = (array) =>{
    console.log("CALCULO");
    let contador = 0;
    for (let i=0; i < array.length; i++){
      for (let j=0;  j < array.length; j++){
        contador++;
      }
    }
    return contador;
  }
  const resultado = calculo(lista);

  return (
    <>
      <h3>Iteraciones: {resultado.toLocaleString()} </h3>
    </>
  )
}

export default ComponentUseMemo