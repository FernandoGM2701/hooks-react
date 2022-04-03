import React from "react";
import HookUseEffect from "./HookUseEffect/HookUseEffect";
import { ListData } from "./HookUseEffect/ListaData";
import ListDataWithUseEffect from "./HookUseEffect/ListDataWithUseEffect";

const UseEffect = () => {
  return (
    <div>
      <h1>UseEffect</h1>
      {/* <HookUseEffect/> */}
      <ListDataWithUseEffect/>
      <br/>
      <p>Un ejemplo más</p>
      <ListData/>
    </div>
  );
};

export default UseEffect;
