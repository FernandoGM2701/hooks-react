import React, { useEffect, useState } from "react";

const EnterKeyHook = () => {

  const handleKeyDown = ({keyCode}) => {
    const enterKeyCode =  13;
    if (keyCode === enterKeyCode) {
      alert('Bien presionado con hook');
    }
  };
  
  useEffect( () => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return 'Presionaaa Enter con hook';
}

export default EnterKeyHook;