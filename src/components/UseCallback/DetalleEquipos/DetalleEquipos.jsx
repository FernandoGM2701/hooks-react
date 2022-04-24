import React from 'react'

const DetalleEquipos = ({item, eliminarEquipo}) => {
  console.log("Detalle de equipos renderizado");
  return (
    <>
      <li> {item.name} </li>
      <button onClick={ () => eliminarEquipo(item.id)}> Eliminar equipo</button>
    </>
  );
};

export default DetalleEquipos;