import { useState } from "react";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Input from "../components/form/Input";
import PlayerList from "../components/testComponent/PlayerList";

export default function Home() {
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
