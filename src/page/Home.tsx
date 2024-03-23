import { useState } from "react";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Input from "../components/form/Input";
import PlayerList from "../components/testComponent/PlayerList";
import { PlayerType } from "../types/playerType";

type HomeProps = {
  players: PlayerType[];
  isError: boolean;
  isLoading: boolean;
  setSelectedPlayer: (player: PlayerType) => void;
};

export default function Home({
  players,
  isLoading,
  isError,
  setSelectedPlayer,
}: HomeProps) {
  const [state, setState] = useState<string>("");
  //console.log("input", state);

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

  //console.log("filteredPlayers", filteredPlayers);

  return (
    <Main>
      <Wrapper tag="div">
        <form>
          <Input setStateProps={setState} />
        </form>

        {/* <UserList state={state} /> */}
        <PlayerList
          isError={isError}
          isLoading={isLoading}
          filteredPlayers={filteredPlayers}
          setSelectedPlayer={setSelectedPlayer}
        />
      </Wrapper>
    </Main>
  );
}
