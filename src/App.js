import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Img from "./components/img";
import Text from "./components/text";

function App() {
  const [nasaData, setNasaData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ey66eWBrtfW9TOIVS4F75WoJIBvAZAE4sWAhqaKF"
      )
      .then(res => {
        setNasaData(res.data);
      })

      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>NASA Photo of the Day App</h1>
      <div className="flexbox">
        <Text 
          title={nasaData.title} 
          explanation={nasaData.explanation}></Text>
        <Img
          url={nasaData.url}
          title={nasaData.title}
          date={nasaData.date}
        ></Img>
      </div>
      <footer>Anna made this!</footer>
    </div>
  );
}

export default App;
