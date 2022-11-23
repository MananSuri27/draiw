import "./App.css";
import React, { useState } from "react";

function App() {
  const [img, setImg] = useState("fill.jpg");
  const [prompt, setPrompt] = useState();
  const [caption, setCaption] = useState("");
  const getImage = async (e) => {
    setCaption(prompt);
    e.preventDefault();
    console.log(prompt);

    let res = await fetch(
      "http://ec2-13-234-120-211.ap-south-1.compute.amazonaws.com:5000/generate",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          prompt: prompt,
        }),
      }
    );

    let result = await res.json();

    setImg(result["res"]);
  };
  return (
    <div className="App">
      <nav className="navbar bg-primary">
        <h1>
          dr<span className="ai">ai</span>w
        </h1>
        <form className="search" onSubmit={getImage}>
          <input
            type="search"
            name="search"
            placeholder="Search"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" class="search-button">
            <i class="fa-sharp fa-solid fa-magnifying-glass" />
            Search
          </button>
        </form>
      </nav>
      <div className="output">
        <img className="output-img" alt="" src={img} />
        <h1 className="output-prompt">{caption}</h1>
      </div>
      <div className="footer">© 2022 M. Suri, P. Jain, S. Jain, M. Sharma</div>
    </div>
  );
}

export default App;
