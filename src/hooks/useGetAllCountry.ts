import { useState, useEffect } from "react";
import { getAllCountries } from "../api/countriesApi";

export function useGetAllPlayers() {
  /*   const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false); */
  const [countries, setCountries] = useState([]);

  const tryGetAllCountryInfo = async () => {
    /*     setIsLoading(true);
    setIsError(false); */
    try {
      const response = await getAllCountries();
      console.log("response from hook", response);
      console.log("j'ai recup la data de l'api");
      //setCountries(response);
      /* setIsLoading(false); */
      return response; // Retourner la réponse complète de l'API
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données des joueurs :",
        error
      );
      /*  setIsLoading(false);
      setIsError(true); */
      throw error;
    }
  };

  /*  useEffect(() => {
    tryGetAllPlayersInfo();
  }, []); */

  return { countries };
}
