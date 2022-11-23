import './App.css';
import React, { useEffect, useState } from "react";
import ImageDisplay from './components/ImageDisplay';
import Navbar from './components/Navbar';

function App() {

  const [img, setImg] = useState();
  const [prompt, setPrompt] = useState();

  const getImage = async(e) => {
    e.preventDefault();
    console.log(prompt)

    let res = await fetch("http://ec2-13-234-120-211.ap-south-1.compute.amazonaws.com:5000/generate",
    {  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: "POST",
      body : JSON.stringify({
        "prompt":prompt
      })
    });

    let result = await res.json();

    setImg(result['res'])

  }
  return (
    <div className="App">
      <nav className='navbar bg-primary'>
      <h1>
       dr<span>ai</span>w
      </h1>
      <form className='search' onSubmit={getImage}>
        <input type='search' name='search' placeholder='Search' onChange={(e)=> setPrompt(e.target.value)}/>
        <h1 className="ss">
      <i class="fa-sharp fa-solid fa-magnifying-glass" >
        <button type='submit'></button>

      </i>
      </h1>
      </form>
      
    </nav>
    <div className="output">
           <img src={img}/>
      </div>
    </div>
  );
}

export default App;
