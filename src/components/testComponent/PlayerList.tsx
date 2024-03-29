import { PlayerType } from "../../types/playerType";
import "./playerList.css";

//import { Link } from "react-router-dom";

export type PlayerListProps = {
  isLoading: boolean;
  isError: boolean;
  filteredPlayers: PlayerType[];
  setSelectedPlayer: (player: PlayerType) => void;
};

export default function PlayerList({
  isLoading,
  isError,
  filteredPlayers,
  setSelectedPlayer,
}: PlayerListProps) {
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

  if (isError) {
    return <p>Une erreur s'est produite lors du chargement des joueurs.</p>;
  }

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <section className="home-section">
      {!isLoading && !isError && filteredPlayers && (
        <ul>
          {filteredPlayers.map((player) => {
            const rank = Object.keys(player.data)[0];
            const points = Object.keys(player.data)[1];

            return (
              <li
                key={player.id}
                className="playerCard"
                data-image-url={player.picture}
                //onClick={() => toggleModal(player)}
                onClick={() => setSelectedPlayer(player)}
              >
                <div className="playerCard__container-image">
                  <img
                    className="player-image"
                    src={player.picture}
                    alt={`${player.firstname} ${player.lastname}`}
                  />
                </div>

                <div
                  data-image={player.picture}
                  className="playerCard__content-resume test"
                >
                  <h2 className="playerCard__playerName">{`${player.firstname} ${player.lastname}`}</h2>
                  <ul className="statList">
                    <li className="statList-item">
                      <p className="stat-title">
                        {capitalizeFirstLetter(rank)}
                      </p>
                      <span className="statList-info">{`#${player.data.rank}`}</span>
                    </li>
                    <li className="statList-item">
                      <p>{capitalizeFirstLetter(points)}</p>
                      <span className="statList-info">
                        {player.data.points}
                      </span>
                    </li>
                    <li className="statList-item">
                      <p>COUNTRY</p>
                      <span className="statList-info">
                        {getCountryFromUrl(player.data.country.picture)}
                      </span>
                    </li>
                  </ul>
                  {/* <Link to={`/player/${player.id}`} className="playerLink">
                    PlayerDetail
                  </Link> */}
                  {/* <div onClick={() => toggleModal(player.id)}>Modal</div> */}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
