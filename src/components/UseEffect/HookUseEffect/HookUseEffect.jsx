import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [disminuir, setDisminuir] = useState(10);

  const handlerDisminuir = () => {
    return setDisminuir(disminuir-1);
  }

  const handlerCounter = () => {
    return setCounter(counter+1);
  }

  useEffect( () => {
    console.log("Valor de counter: " + counter);
  }, [counter]);

    
  return (   
    <div>
        <p>Contador {counter} </p>
        <button onClick={ handlerCounter } > Aumenta </button>    

        <p>Disminución {disminuir} </p>
        <button onClick={ handlerDisminuir } > Disminuye </button>    

    </div>
  );
};

export default HookUseEffect;
