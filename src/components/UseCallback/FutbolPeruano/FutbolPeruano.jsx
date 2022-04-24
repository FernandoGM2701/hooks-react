import React, { useCallback, useState } from 'react'
import ListaEquipos from '../ListaEquipos/ListaEquipos'

const FutbolPeruano = () => {
  const equipos = [
    {id:1, name: "Deportivo Municipal"},
    {id:2, name: "Universitario"},
    {id:3, name: "Alianza Lima"},
    {id:4, name: "Sporting Cristal"},
    {id:5, name: "Sport Boys"},
  ];
  const [equipo, setEquipo] = useState(equipos);
  const [inputEquipo, setInputEquipo] = useState('');
  
  const agregarEquipo = ({target}) => {
    return (
      setInputEquipo(target.value)
    )
  };
  
  // const eliminarEquipo = (id) => {
    // return(
    //   setEquipo(equipo.filter(item => item.id !== id))
    // )
  // };

  const eliminarEquipo = useCallback( ( (id) => {
    return(
      setEquipo(equipo.filter(item => item.id !== id))
    )
  }), [equipo] );

  console.log("Futbol peruano renderizado");
  
  return (
    <>
      <h2>Mi lista de Equipos Peruanos de Futbol</h2>
      <span>
        Agregar Equipo: 
        <input style={{marginLeft: "20px"}} value={inputEquipo} onChange={agregarEquipo} />
      </span>
      <ListaEquipos equipo={equipo} eliminarEquipo={eliminarEquipo} />

    </>
  )
}

export default FutbolPeruano