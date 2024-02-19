import { useState } from "react";
import "./App.scss";
import "./reset.css";
import "./variables.css";

import Home from "./page/Home";
import PlayerList from "./components/testComponent/PlayerList";

function App() {
  //const [isSublistOpen, setIsSublistOpen] = useState<boolean>(false);

  return (
    <Home>
      <input type="text" placeholder="Search a player" />

      <PlayerList />
    </Home>
  );
}

export default App;
