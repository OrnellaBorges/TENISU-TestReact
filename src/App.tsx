import "./App.scss";
import "./reset.css";
import "./variables.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
//import PlayerDetail from "./components/details/PlayerDetail";
import { useGetAllPlayers } from "./hooks/useGetAllPlayers";
import PlayerModal from "./components/modals/PlayerModal";
//import UserList from "./components/list/UserList";

function App() {
  const { isError, isLoading, players } = useGetAllPlayers();

  // state pour la Modal au debut false
  const [openPlayerModal, setOpenPlayerModal] = useState<boolean>(false);

  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);

  // fonction qui va mettre a jour le state de la modal

  const toggleModal = (playerId: number | null) => {
    console.log("playder.id", playerId);
    console.log("hello");
    setOpenPlayerModal(!openPlayerModal);
    setSelectedPlayerId(playerId || null);
  };

  const handleCloseModal = () => {
    setOpenPlayerModal(!openPlayerModal);
  };

  return (
    <>
      {openPlayerModal && (
        <PlayerModal
          players={players}
          playerId={selectedPlayerId}
          closeModal={handleCloseModal}
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
              toggleModal={toggleModal}
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
