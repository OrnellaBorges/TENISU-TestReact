import { useState } from "react";
import "./App.scss";
import "./reset.css";
import "./variables.css";

import CardPlayer from "./components/card/CardPlayer";
import Home from "./page/Home";

function App() {
  //const [isSublistOpen, setIsSublistOpen] = useState<boolean>(false);

  return (
    <Home>
      <input type="text" placeholder="Search a player" />
      <CardPlayer />
    </Home>
  );
}

export default App;
