import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [data, setdata] = useState([]);
  let [status, statussetter] = useState(false);
  const loadData = async () => {
    try {
      setdata("");
      statussetter(true);
      const recevieData = await axios.get("/api/users");
      setdata(recevieData.data.users);
      statussetter(false);
    } catch (error) {
      console.log(error);
      statussetter(false);
    }
  };
  return (
    <div className="App">
      <h1> Data </h1>
      <button onClick={loadData}> Click to load data from server </button>
      {status && <h2>Loading..</h2>}
      <div>{data && data.map((items) => <li>{items.name}</li>)}</div>
    </div>
  );
}
