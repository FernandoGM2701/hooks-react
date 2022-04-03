import React, {useState} from 'react';

const HookUseState = () =>{
    
  const [ contador, setContador ] = useState(0);

  const botonPresionar = () => setContador( contador + 1 );
  
  /*Manejo de arreglos con useState
     
  const [ lista, setLista ] = useState(["Joaquin"]);

   const llenarLista = () => {
     return(
      setLista([...lista, "Joaquin"])
     );
   }
   
  Actualizar elemento con el map
   const updateIndex = 1;
   const nuevaLista = lista.map( (element, index) => {
     if(index === updateIndex){
       return "nuevo_valor";
     }
     return element;
   });

  Eliminar elemento con filter
   const indexToRemove = 1;
   const limpiarLista = lista.filter( (element, index) =>{
       return(
         index !== indexToRemove
       );
   });
  
   const botonNuevaLista = () =>{
     return(
       setLista(nuevaLista)
     )
   }*/
  
  /*Manejo de objetos con usestate 

  const [objeto, setObjeto] = useState({});

  //Por ejemplo:
  const nuevoObjeto = {
    nombre: "Fernando",
    apellido: "Gutierrez",
  }
  //Se puede acceder de dos maneras:
  nuevoObjeto.nombre
  nuevoObjeto["nombre"]
  //Es lo mismo lo de arriba

  setObjeto( {...objeto, nuevoValor: "nuevo valor"} );

  const actualizarObjeto = ( propiedadParaActualizar = "namme" ) =>{
    setObjeto( {...objeto, [propiedadParaActualizar]: "Fernando Alberto"} );
  };
  
  */


  return(
    <div>
      <p>Presione al contador: {contador} </p>
      <button onClick={botonPresionar} > Presionamé el hook state </button>
      {/* <p>Veamos la lista: {lista} </p>
      <button onClick={botonNuevaLista}> Ver lista</button> */}

    </div>
  );
};
export default HookUseState;