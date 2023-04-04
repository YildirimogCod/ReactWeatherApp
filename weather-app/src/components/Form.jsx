import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function Form({info,setInfo,setState}) {
    const [city,setCity] = useState("");
    useEffect(()=>console.log(info),[info]);
    const handleChange = async ()=>{
       const api = "21a1694f968372a2942919631c4d0322";
       const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
       await axios(baseUrl).then(res => setInfo(res.data));
       setState(true);
       
    };
  return (
    <div>
        <h1>Hava Durumu</h1>
        <form onSubmit={(e)=>{e.preventDefault(); handleChange() }}>
            <div className="form">
                <input onChange={(e)=> setCity(e.target.value)} type="text" className="inputText" placeholder='Şehri Giriniz'/>
            </div>
            <div className="btnDiv">
                <button type='submit' className='btn'>Verileri Getir</button>
            </div>
        </form>
    </div>
  )
}

export default Form