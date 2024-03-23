import { useState, useEffect } from "react";
import { getAllPlayers } from "../api/getPlayersData";
import {
  ApiPlayerType,
  PlayerType,
  ResponsePlayerType,
} from "../types/playerType";

export function useGetAllPlayers() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [players, setPlayers] = useState<PlayerType[]>([]);

  console.log("players", players);

  const completeMissingPlayerInfo = (player: ApiPlayerType) => {
    return {
      id: player.id,
      firstname: player.firstname,
      lastname: player.lastname,
      shortname: player.shortname,
      sex: player.sex,
      picture: player.picture,
      data: {
        rank: player.data.rank,
        points: player.data.points,
        country: player.country,
        birthday: String(player.data.age),
        age: player.data.age,
        weight: player.data.weight,
        height: player.data.height,
        last: player.data.last,
      },
    };
  };

  const completeMissingPlayersInfo = (players: ApiPlayerType[]) => {
    return players.map(completeMissingPlayerInfo);
  };

  const tryGetAllPlayersInfo = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response: ResponsePlayerType = await getAllPlayers();
      const completedPlayers: PlayerType[] = completeMissingPlayersInfo(
        response.data.players
      );

      setPlayers(completedPlayers);
      setIsLoading(false);
      return response; // Retourner la réponse complète de l'API
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données des joueurs :",
        error
      );
      setIsLoading(false);
      setIsError(true);
      throw error;
    }
  };

  useEffect(() => {
    tryGetAllPlayersInfo();
  }, []);

  return {
    isError: isError,
    isLoading: isLoading,
    players: players,
  };
}
