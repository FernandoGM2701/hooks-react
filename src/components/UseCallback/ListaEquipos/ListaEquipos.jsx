import React, { memo } from 'react'
import DetalleEquipos from '../DetalleEquipos/DetalleEquipos';



const ListaEquipos = memo(({equipo, eliminarEquipo}) => {
  console.log("Lista de equipos renderizada");
  return (  
    <ul>
      { equipo.map(item => (
        <DetalleEquipos key={item.id} item={item} eliminarEquipo={eliminarEquipo}  />
      ))}
    </ul>
  )
});

export default ListaEquipos;