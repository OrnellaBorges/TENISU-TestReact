import "./App.scss";
import "./reset.css";
import "./variables.css";

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import PlayerDetail from "./components/details/DetailPlayerCard";
//import UserList from "./components/list/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
      </Routes>
    </>
  );
}

export default App;
