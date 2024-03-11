import { useState, useEffect } from "react";
import { getAllPlayers } from "../api/getPlayersData";

// Définir le type pour un joueur
type PlayerType = {
    id: number;
    firstname: string;
    lastname: string;
    country: {
        picture: string;
        code: string;
    };
    picture: string;
    data: {
        rank: number;
        points: number;
        weight: number;
        height: number;
        age: number;
        last: number[];
    };
};
export function useGetAllPlayers() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [players, setPlayers] = useState<PlayerType[]>([]);

    const tryGetAllPlayersInfo = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await getAllPlayers();
            console.log("response from hook", response);
            console.log("j'ai recup la data de l'api");
            setPlayers(response.data.players);
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

    return { isError, isLoading, players };
}
