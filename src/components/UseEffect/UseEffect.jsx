import React from "react";
import HookUseEffect from "./HookUseEffect/HookUseEffect";
import { ListData } from "./HookUseEffect/ListaData";
import ListDataWithUseEffect from "./HookUseEffect/ListDataWithUseEffect";
import { EnterKeyClass } from "./HookUseEffect/Suscripciones/EnterKeyClass";
import EnterKeyHook from "./HookUseEffect/Suscripciones/EnterKeyHook";

const UseEffect = () => {
  return (
    <div>
      <h1>UseEffect</h1>
      {/* <HookUseEffect/> */}
      {/* <ListDataWithUseEffect/>
      <br/>
      <p>Un ejemplo más</p>
      <ListData/> */}
      <h2>Suscripciones con UseEffect</h2>
      <h3>Suscripción con clase: </h3>
      <EnterKeyClass />
      <h3>Suscripción con hook: </h3>
      <EnterKeyHook />
    </div>
  );
};

export default UseEffect;
