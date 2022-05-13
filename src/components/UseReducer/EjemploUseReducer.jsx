import React, { useEffect, useReducer, useState } from 'react';

const EjemploUseReducer = () => {
  const initialState = {
    name: '',
    age: '',
    address: {addres1: '', address2: ''},
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

    if (action.type === 'UPDATE_NAME'){
      return {...state, name: action.payload.name}
    }

    return state;
  }
  // const [user, setUser] = useState(initialState);
  const [user, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // setUser({
    //   ...user,
    //   foo: {
    //     ...user.foo,
    //     foo1: {...user.foo.foo1, foo2: {...user.foo.foo1.foo2, name: 'test'}},
    //   },
    // });
    const action ={
      type: 'UPDATE_NAME',
      payload: {
        name: 'Fer Gutierrez'
      }
    };
    dispatch(action);
  }, []);
  

  return `Example: ${JSON.stringify(user)}`;
};

export default EjemploUseReducer;