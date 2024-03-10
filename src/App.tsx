import { useState } from "react";
import "./App.scss";
import "./reset.css";
import "./variables.css";

import Main from "./page/Main";
import PlayerList from "./components/testComponent/PlayerList";
import Wrapper from "./page/Wrapper";
import Input from "./components/form/Input";
//import UserList from "./components/list/UserList";

function App() {
  const [state, setState] = useState<string>("");
  console.log(state);
  return (
    <Main>
      <Wrapper>
        <form>
          <Input setStateProps={setState} />
        </form>

        {/* <UserList state={state} /> */}
        <PlayerList />
      </Wrapper>
    </Main>
  );
}

export default App;
