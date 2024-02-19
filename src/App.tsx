import { useState } from "react";
import "./App.scss";
import "./reset.css";
import "./variables.css";

import Home from "./page/Home";
import PlayerList from "./components/testComponent/PlayerList";
import Wrapper from "./page/Wrapper";
import Input from "./components/form/Input";

function App() {
  //const [isSublistOpen, setIsSublistOpen] = useState<boolean>(false);

  return (
    <Home>
      <Wrapper>
        <Input />

        <PlayerList />
      </Wrapper>
    </Home>
  );
}

export default App;
