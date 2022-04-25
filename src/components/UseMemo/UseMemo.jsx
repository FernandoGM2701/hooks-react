// El useMemo sirve para memorizar valores como resultado de cálculo

import React, { useState } from 'react'
import ComponentUseMemo from './ComponentUseMemo';

const UseMemo = () => {

  const [inputText, setInputText] = useState("");

  const handleChange = ({target}) => setInputText(target.value);

  const createArray = (length) => {
    let i = length;
    const arr = [];
    while (i--) {
      arr[i] = 0;
    }
    return arr;
  }

  const list = createArray(9);
  
  return (
    <>
      <h1>UseMemo</h1>
      <input value={inputText} onChange={handleChange} />
      <ComponentUseMemo lista = {list} />
    </>
  )
}

export default UseMemo