import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [otp,setOtp]=useState(new Array(4).fill(''));

  const handleChange=(ele,id)=>{
          if(isNaN(ele.value)) return false;
          setOtp([...otp.map((d,i)=> i===id ? ele.value:d)]);

          //focus next sibling
          if(ele.nextSibling){
            ele.nextSibling.focus();
          }
  }

  const handleVerify=(e)=>{
    e.preventDefault();
      alert("enetered "+otp.join(''));
  }
  return (
    <div className="App">
      <header className="App-header">
         <div>
           <p>Pin Generator App</p>
           {otp.map((data,index)=>{
            return  <input 
                      type="text"
                      maxLength={1}
                      name="otp"
                      className='otp-input'
                      key={index}
                      onChange={(e)=>handleChange(e.target,index)}
                      value={data}
                    /> 
           })}
           <br/>
           <button onClick={handleVerify}>Verify</button>
          
         </div>
      </header>
    </div>
  );
}

export default App;
