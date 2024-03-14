import "./App.scss";
import "./reset.css";
import "./variables.css";

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import PlayerDetail from "./components/details/PlayerDetail";
import { useGetAllPlayers } from "./hooks/useGetAllPlayers";
//import UserList from "./components/list/UserList";

function App() {
  const { isError, isLoading, players } = useGetAllPlayers();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home players={players} isError={isError} isLoading={isLoading} />
          }
        />
        <Route
          path="/player/:id"
          element={<PlayerDetail players={players} />}
        />
      </Routes>
    </>
  );
}

export default App;
