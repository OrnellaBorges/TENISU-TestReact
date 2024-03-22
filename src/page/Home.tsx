import { useState } from "react";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Input from "../components/form/Input";
import PlayerList, {
  PlayerListProps,
} from "../components/testComponent/PlayerList";

export default function Home({
  players,
  isLoading,
  isError,
  toggleModal,
}: PlayerListProps) {
  const [state, setState] = useState<string>("");
  console.log(state);

  const filteredPlayers = players.filter((player) => {
    function concatLetters() {
      let personne = "";
      const chemin = player.firstname;

      for (let i = 0; i <= state.length; i++) {
        personne = personne + chemin[i];
      }
      return personne;
    }

    //return concatLetters().toLowerCase().includes("emi");
    //return (user.first_name[0] + user.first_name[1] + user.first_name[2]).toLowerCase().includes("emi");
    return concatLetters().toLowerCase().includes(state);
    // a faire avec la methode REDUCE()
  });

  return (
    <Main>
      <Wrapper tag="div">
        <form>
          <Input setStateProps={setState} />
        </form>

        {/* <UserList state={state} /> */}
        <PlayerList
          players={players}
          isError={isError}
          isLoading={isLoading}
          toggleModal={toggleModal}
          filteredPlayers={filteredPlayers}
        />
      </Wrapper>
    </Main>
  );
}
