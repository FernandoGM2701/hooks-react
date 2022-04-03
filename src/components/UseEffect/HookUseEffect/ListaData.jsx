import React, {useState, useEffect} from "react";
import {myApi} from './my-api';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ListData = () => {

  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);

  const handleUserId = () => {
    const randomId = getRandomInt(1, 5);
    setUserId(randomId);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await myApi.fakeFetch(userId);
      setData(data);
    }
    fetchData();
  }, [userId]);

  return (
    <>
      <h3>User ID: {userId}</h3>
      <ul>
        { data.map( ( {label} ) => {
          return(
            <li key = {label}> {label} </li>
          );
        })  }
      </ul>

      <button onClick={handleUserId}>Update user id</button>
    </>
  );

};
 