import "./modal.css";

import { PlayerType } from "../../hooks/useGetAllPlayers";

type PlayerDetailsType = {
  players: PlayerType[];
  playerId: number | null;

  closeModal: () => void;
};

export default function PlayerModal({
  players,
  playerId,
  closeModal,
}: PlayerDetailsType) {
  if (playerId === null) {
    return <p>Joueur non trouvé</p>;
  }
  console.log("id reçu dans la modal", playerId);
  console.log("players inside modal", players);

  /*   const { id } = useParams();
  console.log("ID du joueur:", id);
  console.log("Données des joueurs:", players); */

  /*  const getCountryFromUrl = (url: string) => {
    const splitedUrl = url.split("/");
    const imageFileName = splitedUrl[splitedUrl.length - 1];
    const countryArray = imageFileName.split(".");
    const country = countryArray[0];
    return country;
  };

  const capitalizeFirstLetter = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
  }; */

  // Recherche du joueur correspondant à l'ID dans la liste des joueurs
  const player = players.find((player) => player.id === Number(playerId));
  console.log("Joueur trouvé:", player);

  if (!player) {
    return <p>Joueur non trouvé</p>;
  }

  // fonction qui extrait et rend dynamique la liste data dans l'objet
  /* const renderDataPlayerList = () => {
    return (
      <>
        {Object.entries(player.data)
          .slice()
          .map(([key, value]) => (
            <div>
              {key === "rank" || key === "points" || key === "country" ? (
                <div className="statbox">
                  <h3>{key}</h3>
                  <p>{value}</p>
                </div>
              ) : null}
              {key === "height" || key === "age" ? (
                <div className="statbox">
                  <h3>{key}</h3>
                  <p>{value}</p>
                </div>
              ) : null}
            </div>
          ))}
      </>
    );
  }; */

  return (
    <div className="modalBackground">
      <div className="titleCloseBtn">
        <button onClick={() => closeModal()}>X</button>{" "}
        {/* Ferme la modal en passant null à toggleModal */}
      </div>
      <div className="modalContainer">
        <div className="title">
          <h2>
            {player.firstname} {player.lastname}
          </h2>
        </div>

        <div className="body">
          <p>Ma super modal de test from Youtube tutorial</p>
        </div>
      </div>
    </div>
  );
}
