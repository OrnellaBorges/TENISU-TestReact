import { useState } from "react";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Input from "../components/form/Input";
import PlayerList, {
  PlayerListProps,
} from "../components/testComponent/PlayerList";

export default function Home({ players, isLoading, isError }: PlayerListProps) {
  const [state, setState] = useState<string>("");
  console.log(state);
  return (
    <Main>
      <Wrapper tag="div">
        <form>
          <Input setStateProps={setState} />
        </form>

        {/* <UserList state={state} /> */}
        <PlayerList players={players} isError={isError} isLoading={isLoading} />
      </Wrapper>
    </Main>
  );
}
