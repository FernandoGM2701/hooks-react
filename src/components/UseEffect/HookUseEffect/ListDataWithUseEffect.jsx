import React, { useEffect, useState } from "react";

const ListDataWithUseEffect = () => {
  const [data, setData] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/users";
  const getData = async () =>{    
    const response = await fetch(URL);
    const result = await response.json();
    //console.log(result); 
    setData(result);

  }

  useEffect( () => {
    getData();
  }, []);
  

  return (
    <div>
      <h1>ListDataf</h1>
      <ul>
         { data.map( (item) => {
           return (
            <li key="item.id" > {item.name} </li>
           )
         }) 
         }
      </ul>
    </div>
  );
};

export default ListDataWithUseEffect;
