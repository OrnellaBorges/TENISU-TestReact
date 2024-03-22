import { useParams } from "react-router-dom";
import { PlayerType } from "../../hooks/useGetAllPlayers";

type PlayerDetailsType = {
  players: PlayerType[];
};

export default function PlayerDetail({ players }: PlayerDetailsType) {
  const { id } = useParams();
  console.log("ID du joueur:", id);
  console.log("Données des joueurs:", players);

  const getCountryFromUrl = (url: string) => {
    const splitedUrl = url.split("/");
    const imageFileName = splitedUrl[splitedUrl.length - 1];
    const countryArray = imageFileName.split(".");
    const country = countryArray[0];
    return country;
  };

  const capitalizeFirstLetter = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  // Recherche du joueur correspondant à l'ID dans la liste des joueurs
  const player = players.find((player) => player.id === Number(id));
  console.log("Joueur trouvé:", player);

  if (!player) {
    return <p>Joueur non trouvé</p>;
  }

  // fonction qui extrait et rend dynamique la liste data dans l'objet
  const renderDataPlayerList = () => {
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
  };
  return (
    <div className="modalContainer">
      <button className="openClose-Button">X</button>
      {/* Affichez les détails complets du joueur ici */}

      <div className="playerModal-Container">
        <h1 className="player-fullName">
          <span className="firstName">{player.firstname}</span>{" "}
          {player.lastname}
        </h1>
        {/*         <figure>
          <img src={player.picture} alt="" />
        </figure> */}
        <div>
          <figure>
            <img src={player.country.picture} alt="" />
            <figcaption>{player.country.code}</figcaption>
          </figure>
        </div>

        <ul
          className="
        statContainer"
        >
          {renderDataPlayerList()}
        </ul>
      </div>
    </div>
  );
}
