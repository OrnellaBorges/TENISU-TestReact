import { useState } from "react";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Input from "../components/form/Input";
import PlayerList from "../components/testComponent/PlayerList";

export default function Home({ players, isLoading, isError }) {
  const [state, setState] = useState<string>("");
  console.log(state);
  return (
    <Main>
      <Wrapper type="div">
        <form>
          <Input setStateProps={setState} />
        </form>

        {/* <UserList state={state} /> */}
        <PlayerList players={players} isError={isError} isLoading={isLoading} />
      </Wrapper>
    </Main>
  );
}
