import React, { useEffect, useState } from "react";
import { useGetAllPlayers } from "../../hooks/useGetAllPlayers";
import "./playerList.css";

export default function PlayerList() {
  const { isError, isLoading, players } = useGetAllPlayers();

  const keysToShow = Object.keys(players);
  console.log(keysToShow);

  console.log("players", players);

  if (isError) {
    return <div>Une erreur s'est produite lors du chargement des joueurs.</div>;
  }

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <section className="home-section">
      <div>
        <ul>
          {players.map((player) => (
            <li
              key={player.id}
              className="playerCard"
              data-image-url={player.picture}
            >
              <div className="playerCard__container-image">
                <img
                  className="player-image"
                  src={player.picture}
                  alt={`${player.firstname} ${player.lastname}`}
                />
              </div>

              <div className="playerCard__content-resume">
                <h2 className="playerCard__playerName">{`${player.firstname} ${player.lastname}`}</h2>
                <ul className="statList">
                  <li className="statList-item">
                    <p className="stat-title">RANK</p>
                    <span className="statList-info">{`#${player.data.rank}`}</span>
                  </li>
                  <li className="statList-item">
                    <p>POINTS</p>
                    <span className="statList-info">{player.data.points}</span>
                  </li>
                  <li className="statList-item">
                    <p>COUNTRY</p>
                    <span className="statList-info">{player.country.code}</span>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
