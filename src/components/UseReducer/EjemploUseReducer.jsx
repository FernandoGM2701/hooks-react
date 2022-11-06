import React, { useEffect, useReducer, useState } from 'react';

const initialState = {
  name: '',
  age: '',
  address: { addres1: '', address2: '' },
  foo: {
    foo1: {
      foo2: {
        name: '',
        test: '',
      },
      new: {},
    },
  },
};

const reducer = (state, action) => {
  // lógica de actualización de estado...
  if (action.type === 'UPDATE_NAME'){
    return {...state, name: action.payload.name}
  }

  if (action.type === 'UPDATE_NAME'){
    return {...state, name: action.payload.name}
  }
  /*
  if (action.type === 'UPDATE_NAME'){
    return {...state, name: action.payload.name}
  }*/

  return state;
}

const EjemploUseReducer = () => {

  // const [user, setUser] = useState(initialState);
  const [user, dispatch] = useReducer(reducer, initialState);

  /* Función pura: es aquella que dado los mismos parámetros, vamos a tener siempre los mismos resultados
   Ejm: función de suma con parámetros A y B siempre que pasemos los valores de A y B tendremos el mismo
   resultado.
   Función reductora o reducer: es una función pura de JS que tiene la lógica para actualizar el estado
   que en este caso recibe los parámetros de state y action y esta función reducer siempre debe retornar
   un estado nuevo
   dispatch: es una función que tenemos que pasar por parámetro un objeto y este objeto es el que va 
   a recibir este reducer es decir el action
   action: el objeto plano de JS en el que le pasamos la propiedad TYPE y PAYLOAD
  */

  useEffect(() => {
    /*setUser({
       ...user,
       foo: {
         ...user.foo,
         foo1: {...user.foo.foo1, foo2: {...user.foo.foo1.foo2, name: 'Fernando'}},
       },
     });*/
    const action = {
      type: 'UPDATE_NAME',
      payload: {
        name: 'Alberto'
      }
    };
    dispatch(action);
  }, []);
  
  return `Ejemplo: ${JSON.stringify(user)}`;
};

export default EjemploUseReducer;