import React from 'react';
import ClasesUseState from './ClasesUseState/ClasesUseState';
import HookUseState from './HookUseState/HookUseState';
import "./UseState.css";


function UseState() {
  return (
    <div className='usestate'>
        <div className='subtitulo'>CONTADOR</div>
        <div className='subtitulo'>Estado del useState con componente clase:</div>
        <br/>
        <ClasesUseState/>
        <br/>
        <div className='subtitulo'>Estado del useState con el Hook useState:</div>
        <br/>
        <HookUseState/>
        <br/>
    </div>
  )
}

export default UseState;