import React,{ useCallback, useEffect, useState } from 'react'
import axios from 'axios';


const accessToken='k_sudl4l70';

axios.interceptors.request.use(
    config=>{
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
    },
    error=>{
       return Promise.reject(error);
    }
)

const FetchingData = () => {
    const [data,setData]=useState([]);
   useEffect(()=>{
      fetch('http://projects.raisonminds.com/api/data.json').then((res)=>res.json()).then(data=>console.log(data));
   },[])
  return (
    <div>
      
    </div>
  )
}

export default FetchingData
