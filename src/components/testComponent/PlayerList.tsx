import React, { useEffect, useState } from "react";
import { useGetAllPlayers } from "../../hooks/useGetAllPlayers";
import "./playerList.css";

export default function PlayerList() {
  /*   const players = [
    {
      id: 52,
      firstname: "Novak",
      lastname: "Djokovic",
      shortname: "N.DJO",
      sex: "M",
      country: {
        picture:
          "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
        code: "SRB",
      },
      picture:
        "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
      data: {
        rank: 2,
        points: 2542,
        weight: 80000,
        height: 188,
        age: 31,
        last: [1, 1, 1, 1, 1],
      },
    },
  ]; */
  const { isError, isLoading, players } = useGetAllPlayers();

  console.log("players", players);

  if (isError) {
    return <div>Une erreur s'est produite lors du chargement des joueurs.</div>;
  }

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <section>
      {/* <li className="playerCard">
        <div className="playerCard__container-image ">
          <img className="player-image" src={players[0].picture} alt="" />
        </div>
        <div className="playerCard__content-resume">
          <h2 className="playerCard__playerName">{`${players[0].firstname} ${players[0].lastname}`}</h2>
          <ul className="statList">
            <li className="statList-item">
              RANK
              <span className="statList-info">{`#${players[0].data.rank}`}</span>
            </li>
            <li className="statList-item">
              POINTS
              <span className="statList-info">{players[0].data.points}</span>
            </li>
            <li className="statList-item">
              COUNTRY
              <span className="statList-info">{players[0].country.code}</span>
            </li>
          </ul>
        </div>
      </li> */}
      <div>
        <h1>Liste des joueurs</h1>
        <ul>
          {players.map((player) => (
            <li key={player.id} className="playerCard">
              <img
                className="player-image"
                src={player.picture}
                alt={`${player.firstname} ${player.lastname}`}
              />
              <div>
                <h2>{`${player.firstname} ${player.lastname}`}</h2>
                <p>Pays: {player.country.code}</p>
                <p>Rang: {player.data.rank}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
