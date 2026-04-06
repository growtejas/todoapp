import { useState } from "react";
import Header from "./components/Header";
import tejasPhoto from "./assets/tejasPhoto.jpg";

import SocialIcon from "./components/SocialIcon";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="profile-container">
        <img src={tejasPhoto} alt="Tejas" className="profile-image" />
        <h1 className="mainh2">Tejas Patil</h1>
        <h4>Jonior Software Engineer</h4>
        <SocialIcon/>
        
      </div>
    </div>
  );
}

export default App;
