import "./styles.css";
import React,{useState} from 'react';
import One from "./components/One"


export default function App() {
  const [data,setData]=useState(23);
const f=(dat)=>{
  setData(dat);
}
  return (
    <div className="App">
     {data}
     <One f={f}></One>
    </div>
  );
}
