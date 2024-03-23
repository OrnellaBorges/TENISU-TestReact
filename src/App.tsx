import "./App.scss";
import "./reset.css";
import "./variables.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
//import PlayerDetail from "./components/details/PlayerDetail";
import { useGetAllPlayers } from "./hooks/useGetAllPlayers";
import PlayerModal from "./components/modals/PlayerModal";
import { PlayerType } from "./types/playerType";
//import UserList from "./components/list/UserList";

function App() {
  const { isError, isLoading, players } = useGetAllPlayers();
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerType>();

  return (
    <>
      {selectedPlayer && (
        <PlayerModal
          joueur={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              players={players}
              isError={isError}
              isLoading={isLoading}
              setSelectedPlayer={setSelectedPlayer}
            />
          }
        />
        {/* <Route
          path="/player/:id"
          element={<PlayerDetail players={players} />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
