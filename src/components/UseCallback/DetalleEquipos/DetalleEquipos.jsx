import React, { memo } from 'react'

const DetalleEquipos = memo(({item, eliminarEquipo}) => {
  console.log("Detalle de equipos renderizado");
  return (
    <>
      <li> {item.name} </li>
      <button onClick={ () => eliminarEquipo(item.id)}> Eliminar equipo</button>
    </>
  );
});

export default DetalleEquipos;