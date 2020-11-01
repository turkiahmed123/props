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
        Telephone="(+216) 53693636"
        Email="alouanihbib@hotmail.com"
        Adresse="Les berges du lac, Tunis"
      />
    </div>
  );
}

export default App;