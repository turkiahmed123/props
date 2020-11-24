import React from "react";
import "./App.css";
import Bio from "./profile/component/bio";
import Contact from "./profile/component/contact";
function App() {
  return (
    <div className="App">
    

      <br />

      <Bio />
      <img id="pic-img" src="/image.jpg" alt="" />
      <Contact 
        Telephone="(+216) 20 940 841"
        Email="turkiahmed40@gmail.com"
        Adresse="Zaghouan"
      />
    </div>
  );
}

export default App;